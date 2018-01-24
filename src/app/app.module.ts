import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderModule } from './layout/header/header.module';
import { SideModule } from './layout/side/side.module';
import { ContentModule } from './layout/content/content.module';
import { FooterModule } from './layout/footer/footer.module';

@NgModule({
  imports: [
    BrowserModule,
    HeaderModule,
    SideModule,
    FooterModule,
    ContentModule,
  ],
  exports: [],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
