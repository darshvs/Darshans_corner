import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @ViewChild('top') top: ElementRef;
  ngOnInit() {
    this.top.nativeElement.scrollTop = 0;  
  }
}
