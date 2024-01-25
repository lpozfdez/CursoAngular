import { Component, Output, EventEmitter } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor( private gifsService: GifsService){}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  getGifSelected(tag: string):void {
    this.gifsService.searchTag(tag);
  }


}
