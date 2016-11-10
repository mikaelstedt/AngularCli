import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translations';
import { Language } from './language';

@Injectable()
export class TranslateService {
  private _defaultLang: string;
  private _currentLang: string;
  private _fallback: boolean;

  private PLACEHOLDER = '%'; // our placeholder

  // inject our translations
  constructor( @Inject(TRANSLATIONS) private _translations: {[id: string] : any}) {
  }

  public getSupportedLanguages() : Language[]{
    let languages = Object.keys(this._translations).map(key => {
      return { key : key, display : this._translations[key]['_LanguageName']};
    });
    return languages;
  }

  public setDefaultLang(lang: string) {
    this._defaultLang = lang; // set default lang
  }

  public get currentLang() {
    return this._currentLang || this._defaultLang;
  }

  public enableFallback(enable: boolean) {
    this._fallback = enable; // enable or disable fallback language
  }

  public onLanguageChanged: EventEmitter<string> = new EventEmitter<string>();

  public use(lang: string): void {
    // set current language
    this._currentLang = lang;
    this.onLanguageChanged.emit(lang);
  }

  private translate(key: string): string { // refactor our translate implementation
    let translation = key;

    // found in current language
    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
    }

    // fallback disabled
    if (!this._fallback) {
      return translation;
    }

    // found in default language
    if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
      return this._translations[this._defaultLang][key];
    }

    // not found
    return translation;
  }

  public instant(key: string, words?: string | string[]) {
    const translation: string = this.translate(key);

    if (!words) return translation;
    return this.replace(translation, words); // call replace function
  }

  public replace(word: string = '', words: string | string[] = '') {
    let translation: string = word;

    const values: string[] = [].concat(words);
    values.forEach((e, i) => {
      translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
    });

    return translation;
  }


}
