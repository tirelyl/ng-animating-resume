import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleEditorComponent } from './style-editor/style-editor.component';
import { ResumeEditorComponent } from './resume-editor/resume-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEditorComponent,
    ResumeEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
