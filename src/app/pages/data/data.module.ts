import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildItemComponent } from './data-component/child-item/child-item.component';
import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data-component/data.component';
import { DataInputsComponent } from './data-component/data-inputs/data-inputs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-component/data-table/data-table.component';

@NgModule({
  declarations: [
    ChildItemComponent,
    DataComponent,
    DataInputsComponent,
    DataTableComponent,
  ],
  imports: [CommonModule, DataRoutingModule, ReactiveFormsModule],
})
export class DataModule {}
