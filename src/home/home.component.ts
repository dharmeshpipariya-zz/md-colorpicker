import { Component } from '@angular/core';
import {MdColorpicker} from "../colorpicker/colorpicker";

@Component({
  selector: 'my-app',
  template: '<h3>Demo</h3><md-colorpicker></md-colorpicker>',
  directives: [MdColorpicker]
})

export class HomeComponent { }