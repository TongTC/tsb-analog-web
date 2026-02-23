import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './[id].page.html',
  styleUrl: './[id].page.css'
})
export default class MarkdownDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  markdownContent: SafeHtml | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadMarkdown(id);
      }
    });
  }

  loadMarkdown(id: string) {
    this.loading = true;
    this.error = null;

    // Map IDs to markdown file paths
    const markdownMap: { [key: string]: string } = {
      'timda-solution': '/mdfiles/timda_solution/timda.md',
      'greenpak-intro': '/mdfiles/greenPAK/greenpak.md'
    };

    const filePath = markdownMap[id];
    if (!filePath) {
      this.error = 'Markdown file not found';
      this.loading = false;
      return;
    }

    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: async (content) => {
        try {
          // Parse markdown to HTML (marked is async)
          const htmlContent = await marked(content);
          // Trust and sanitize the HTML
          this.markdownContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
          this.loading = false;
        } catch (err) {
          console.error('Failed to parse markdown:', err);
          this.error = 'Failed to parse content';
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('Failed to load markdown file:', err);
        this.error = 'Failed to load file: ' + filePath;
        this.loading = false;
      }
    });
  }
}
