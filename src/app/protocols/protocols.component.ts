import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../i18n';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {

  public translatedText: string;
  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    this.refreshText();
    this.subscribeToLanguageChanged();
  }

  subscribeToLanguageChanged() {
    // refresh text
    // please unsubribe during destroy
    return this._translate.onLanguageChanged.subscribe(x => this.refreshText());
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }
}
