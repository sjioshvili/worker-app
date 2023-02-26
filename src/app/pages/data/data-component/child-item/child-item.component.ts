import { Component, Input } from '@angular/core';
import { ChildItem } from '../../../../models/childItem';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss'],
})
export class ChildItemComponent {
  @Input() childItem!: ChildItem;
}
