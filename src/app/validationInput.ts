import { ValidationErrors, AbstractControl } from '@angular/forms';

export function isGmail(control: AbstractControl): ValidationErrors | null {
    const mail: string = control.value;
    if (!mail.trim().endsWith('@gmail.com')) { // input invalid
        return { error: 'Email invalid!'};
    }
    return null; // valid
}
