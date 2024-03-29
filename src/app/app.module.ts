import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductComponent } from './components/product/product.component';
import { AddEffectsToButtonsDirective } from './directives/add-effects-to-buttons.directive';
import { FormatTextAdvantagesPipe } from './pipes/format-text-advantages.pipe';
import { FormatPhoneNumberPipe } from './pipes/format-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductComponent,
    AddEffectsToButtonsDirective,
    FormatTextAdvantagesPipe,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
