import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-media-item',
  templateUrl: 'media-item.component.html',
  styleUrls: ['media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  name = 'The Redemption';

}
