import { Component, OnInit } from '@angular/core';
import { FULLSTYLE, FULLMARKDOWN } from './constants';
import { from, of, concat } from 'rxjs';
import { delay, concatMap, tap, finalize } from 'rxjs/operators';

const INTERVAL = 40;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private fullStyle = FULLSTYLE;
  private fullMarkdown = FULLMARKDOWN;

  currentStyle = '';
  currentMarkdown = '';
  enableHtml = false;


  ngOnInit(): void {
    console.log('begain');
    const styleSection1$ = from(this.fullStyle[0])
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentStyle += char || ' ')
      );
    const markdownSection$ = from(this.fullMarkdown)
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentMarkdown += char || ' ')
      );
    const styleSection2$ = from(this.fullStyle[1])
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentStyle += char || ' '),
        finalize(() => this.enableHtml = true)
      );
    const styleSection3$ = from(this.fullStyle[2])
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentStyle += char || ' ')
      );

    concat(styleSection1$, markdownSection$, styleSection2$, styleSection3$).subscribe();
  }

}
