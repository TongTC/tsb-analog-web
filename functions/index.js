import functions from 'firebase-functions';
import { b as useNitroApp, t as toNodeListener } from '../dist/analog/server/chunks/_/nitro.mjs';

const nitroApp = useNitroApp();
const handler = toNodeListener(nitroApp.h3App);

export const server = functions.https.onRequest(handler);