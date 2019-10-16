import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ImgModalComponent } from './img-modal/img-modal.component';

@Component({
  selector: 'app-img-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private injector: Injector,
  ) {
    const AppImgModalElement = createCustomElement(
      ImgModalComponent,
      { injector: this.injector }
    );
    customElements.define('app-img-modal', AppImgModalElement);
  }
}
