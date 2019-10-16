import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

// component
import { AppComponent } from './app.component';
import { ImgModalComponent, DialogComponent } from './img-modal/img-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ImgModalComponent,
    DialogComponent
  ]
})
export class AppModule { }
