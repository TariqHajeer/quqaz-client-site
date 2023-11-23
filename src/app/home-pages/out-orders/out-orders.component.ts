import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HomeService } from 'src/app/_services/home.service';
import { ToastMessageService } from 'src/app/_services/toast-message.service';
import { dispalyFormErrors } from 'src/app/_sheard/validator';

@Component({
  selector: 'app-out-orders',
  templateUrl: './out-orders.component.html',
  styleUrls: ['./out-orders.component.scss']
})
export class OutOrdersComponent {
  requestExternalShipmentForm = new FormGroup({
    from: new FormControl<string>("", [RxwebValidators.required({ message: 'الشحن من حقل مطلوب' })]),
    to: new FormControl<string>("", [RxwebValidators.required({ message: 'الشحن الى حقل مطلوب' })]),
    productUrl: new FormControl<string>("", [RxwebValidators.required({ message: 'رابط المنتج حقل مطلوب' }), RxwebValidators.url({ message: ' رابط المنتج غير صالح' })]),
    email: new FormControl<string>("", [RxwebValidators.required({ message: ' البريد الالكتروني حقل مطلوب' }), RxwebValidators.email({ message: 'البريد الالكتروني غير صالح' })]),
    phone: new FormControl<string>("", [RxwebValidators.required({ message: ' رقم الجوال حقل مطلوب' }), RxwebValidators.maxLength({ value: 11, message: 'يجب ان لا يتجاوز رقم الجوال 11 رقم' })]),
  });
  loading: boolean = false;
  constructor(private homeService: HomeService,
    private toastMessageService: ToastMessageService) { }
  requestExternalShipment() {
    if (this.requestExternalShipmentForm.invalid) {
      dispalyFormErrors(this.requestExternalShipmentForm);
      return;
    }
    this.loading = true;
    this.homeService.requestExternalShipment(this.requestExternalShipmentForm.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.toastMessageService.showSuccess('نجاح', 'تم ارسال الطلب بنجاح ');
        this.requestExternalShipmentForm.reset();
      },
      error: (err) => {
        this.loading = false;
        this.toastMessageService.showError("خطأ", "حدث خطأ ما يرجى المحاولة مرة اخرى");
      }
    })
  }
}
