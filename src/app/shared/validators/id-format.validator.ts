import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function idFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const matches = control.value.match(/^[0-9]+((?:[,][0-9]{0,20})?)$/g);
      return matches ? null : { invalidFormat: true };
    } else {
      return null;
    }
  };
}
