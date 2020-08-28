import { Component, HostListener } from '@angular/core';
import { ColorService } from '../color.service'

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  public hue: string;
  public color: string;
  public hexColor: String;
  constructor(private colorService: ColorService) { }
  ngOnInit() {
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(evt: MouseEvent) {
    this.hexColor= this.colorService.hexColor;
  }
}
