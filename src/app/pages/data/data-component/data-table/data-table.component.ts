import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from '../../../../models/DataModel';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  @Input() data!: Observable<DataModel[]>;
}
