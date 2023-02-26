import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputData } from '../../../../models/inputData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { uniqueNumberListValidator } from '../../../../shared/validators/uniqueNumber.validator';

@Component({
  selector: 'data-inputs',
  templateUrl: './data-inputs.component.html',
  styleUrls: ['./data-inputs.component.scss'],
})
export class DataInputsComponent implements OnInit {
  @Output() getData = new EventEmitter<InputData>();
  @Output() stopData = new EventEmitter<boolean>();

  inputForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  createForm() {
    this.inputForm = this.formBuilder.group({
      timer: [1000, [Validators.required, Validators.min(1000)]],
      size: [1000, [Validators.required, Validators.min(1)]],
      ids: [null, uniqueNumberListValidator()],
    });
  }
  ngOnInit() {
    this.createForm();

    // get data for default parameters
    this.onGetData();
  }

  onGetData() {
    if (this.inputForm.invalid) {
      return;
    }

    this.getData.emit(this.inputForm.value);
  }
  onStopData() {
    this.stopData.emit(true);
  }
}
