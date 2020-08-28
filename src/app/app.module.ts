import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorPaletteComponent } from './color-picker/color-palette/color-palette.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorSliderComponent } from './color-picker/color-slider/color-slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPaletteComponent,
    ColorPickerComponent,
    ColorSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
