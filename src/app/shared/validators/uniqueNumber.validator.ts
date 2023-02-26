import { ValidatorFn, AbstractControl } from '@angular/forms';

export function uniqueNumberListValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      // The control is empty, so the validation passes
      return null;
    }

    // Split the input string into an array of numbers
    const numbers = value.split(',').map(Number);

    // Check that each value is a unique number
    const uniqueNumbers = [...new Set(numbers)];
    if (numbers.length !== uniqueNumbers.length) {
      // The input string contains duplicate values, so the validation fails
      return { duplicateNumbers: true };
    }

    // Check that each value is a number
    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        // The input string contains non-numeric values, so the validation fails
        return { invalidFormat: true };
      }
    }

    // The input string is valid, so the validation passes
    return null;
  };
}
