import { FormGroup } from "@angular/forms";

export function dispalyFormErrors(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
        const control = form.get(field);
        if (control?.invalid) {
            control.markAsDirty();
            control.markAsTouched();
        }
    });
}