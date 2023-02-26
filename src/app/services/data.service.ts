import { map, Observable, Observer, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';

import { DataModel } from '../models/DataModel';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private worker!: Worker;
  dataFromWorker!: DataModel[];

  private initWebWorker() {
    if (!this.worker) {
      this.worker = new Worker(
        new URL('../workers/data.worker', import.meta.url),

        {
          type: 'module',
        }
      );
    }
  }

  getFirstTenItems(
    interval: number,
    size: number,
    start: number,
    end: number
  ): Observable<DataModel[]> {
    this.initWebWorker();

    this.worker.postMessage({
      command: 'start',
      interval: interval,
      size: size,
    });

    return new Observable((observer: Observer<DataModel[]>) => {
      this.worker.onmessage = ({ data }) => {
        this.dataFromWorker = data.map((item: any) =>
          plainToInstance(DataModel, item)
        );

        observer.next(this.dataFromWorker);
      };
    }).pipe(
      // Only emit the first 10 items
      map((items: DataModel[]) => items.slice(start, end))
    );
  }

  loadMore(end: number) {
    return of(this.dataFromWorker.slice(0, end));
  }

  stopData() {
    this.worker.postMessage({ command: 'stop' });
  }
}
