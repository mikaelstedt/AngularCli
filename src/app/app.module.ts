import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { MapIteratorPipe, NavigationComponent } from './shared';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './i18n';
import { HomeComponent } from './home/home.component'
import '../styles.scss';

@NgModule({
  declarations: [
    AppComponent,
    ProtocolsComponent,
    MapIteratorPipe,
    HomeComponent,
    TranslatePipe,
    NavigationComponent
  ],
  imports: [
    AlertModule,
    Ng2BootstrapModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
