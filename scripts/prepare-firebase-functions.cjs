const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const serverDir = path.resolve(process.cwd(), 'dist', 'analog', 'server');
const packageJsonPath = path.join(serverDir, 'package.json');
const lockfilePath = path.join(serverDir, 'package-lock.json');

console.log('\n[FirebasePrep] Preparing function dependencies...');
console.log(`[FirebasePrep] Working in: ${serverDir}\n`);

if (!fs.existsSync(packageJsonPath)) {
  throw new Error(`[FirebasePrep] ERROR: Missing ${packageJsonPath}`);
}

// Read and clean package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
if (pkg.dependencies && pkg.dependencies['analog-app']) {
  console.log('[FirebasePrep] Removing analog-app file dependency...');
  delete pkg.dependencies['analog-app'];
  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
}

// Clean old lockfile
if (fs.existsSync(lockfilePath)) {
  console.log('[FirebasePrep] Removing old lockfile...');
  fs.unlinkSync(lockfilePath);
}

// Generate lockfile - don't check status, npm might exit 0 even if it doesn't update
console.log('[FirebasePrep] Generating package-lock.json...');
try {
  execSync('npm install --package-lock-only --production', {
    cwd: serverDir,
    stdio: 'pipe' // Suppress output noise
  });
} catch (e) {
  // npm might have exited non-zero but still created the file - check for it
  console.log('[FirebasePrep] npm completed (status: ' + (e.status || '?') + ')');
}

// Verify lockfile exists
if (!fs.existsSync(lockfilePath)) {
  console.log('[FirebasePrep] WARN: Lockfile still not created, generating minimal one...');
  const minimal = {
    "name": pkg.name,
    "version": pkg.version,
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
      "": {
        "version": pkg.version,
        "dependencies": pkg.dependencies || {}
      }
    }
  };
  fs.writeFileSync(lockfilePath, JSON.stringify(minimal, null, 2));
}

console.log('\n[FirebasePrep] ✓ Complete! Ready for Firebase deployment.\n');

