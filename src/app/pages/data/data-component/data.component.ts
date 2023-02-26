import { Component } from '@angular/core';
import { DataModel } from '../../../models/DataModel';
import { DataService } from '../../../services/data.service';
import { map, Observable } from 'rxjs';
import { InputData } from '../../../models/inputData';
import { start } from '@popperjs/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  dataItems$!: Observable<DataModel[]>;
  start: number = 0;
  end: number = 10;

  constructor(private dataService: DataService) {}

  stopData($event: boolean) {
    if ($event) {
      this.dataService.stopData();
    }
  }

  getData($event: InputData): void {
    this.dataItems$ = this.dataService
      .getFirstTenItems($event.timer, $event.size, this.start, this.end)
      .pipe(
        map((items: DataModel[]) => {
          if ($event.ids) {
            let idArray = $event.ids.split(',');
            for (let i = 0; i < idArray.length && i < items.length; i++) {
              items[i].id = idArray[i];
            }
          }
          return items;
        })
      );
  }

  loadMore(): void {
    this.end = this.end + 10;
    this.dataItems$ = this.dataService.loadMore(this.end);
  }
}
