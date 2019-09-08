import { Component, OnInit, Input } from '@angular/core';
import Prism from 'prismjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-style-editor',
  templateUrl: './style-editor.component.html',
  styleUrls: ['./style-editor.component.css']
})
export class StyleEditorComponent implements OnInit {
  @Input() code: string;

  get codeInStyleTag(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(`<style>${this.code}</style>`);
  }

  get highlightedCode(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(Prism.highlight(this.code, Prism.languages.css));
  }

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
