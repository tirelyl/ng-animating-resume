import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import marked from 'marked';

@Component({
  selector: 'app-resume-editor',
  templateUrl: './resume-editor.component.html',
  styleUrls: ['./resume-editor.component.css']
})
export class ResumeEditorComponent implements OnInit {
  @Input() markdown: string;
  @Input() enableHtml = false;

  get result(): string | SafeHtml {
    return this.enableHtml ? this.domSanitizer.bypassSecurityTrustHtml(marked(this.markdown)) : this.markdown;
  }

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
