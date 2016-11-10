import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../i18n';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public supportedLanguages: any[];
  public title: string = "SWS";

  constructor(private _translate: TranslateService) { }

  ngOnInit() {

    this.subscribeToLanguageChanged();
    this.supportedLanguages = this._translate.getSupportedLanguages();
    this._translate.setDefaultLang('en'); // set English as default
    this._translate.enableFallback(true); // enable fallback

    // set current langage
    this.selectLanguage('en');
  }

  isCurrentLanguage(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLanguage(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }

  subscribeToLanguageChanged() {
    // refresh text
    // please unsubribe during destroy
    return this._translate.onLanguageChanged.subscribe(x => this.refreshText());
  }

  refreshText() {
    // refresh translation when language change
    this.title = this._translate.instant('App Title');
  }

}
