import {  Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoader: boolean = false;

  onLoad() {
    setTimeout(() => {
      this.hasLoader = true;
    }, 1000);
  }

}
