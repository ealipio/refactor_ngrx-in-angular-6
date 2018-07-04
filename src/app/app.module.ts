import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
