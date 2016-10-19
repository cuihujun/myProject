import { Component } from '@angular/core';
import { MediaItemComponent} from './media-item/media-item.component';

@Component({
  moduleId: module.id,
  selector: 'my-project-app',
  directives:[MediaItemComponent],
  templateUrl: 'my-project.component.html',
  styleUrls: ['my-project.component.css']
})
export class MyProjectAppComponent {
  title = 'my-project works!';
}
