import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/_services/home.service';
import { CountryDto } from 'src/app/_store/country';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';
import { ReserveMailBoxDto } from 'src/app/_store/reserve-mail-box';
import { PagingDto } from 'src/app/_store/paging';
import { BranchDto } from 'src/app/_store/branch';
import { ClientMessageDto } from 'src/app/_store/client-message';
import { dispalyFormErrors } from 'src/app/_sheard/validator';
import { ToastMessageService } from 'src/app/_services/toast-message.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  shipmentForm: FormGroup = new FormGroup({
    code: new FormControl<string>("", [RxwebValidators.required({ message: 'كود الشحنة  حقل مطلوب' }), RxwebValidators.alphaNumeric({ message: 'كود الشحنة غير صالح' })]),
    phone: new FormControl<string>("", [RxwebValidators.required({ message: 'رقم االهاتف حقل مطلوب' }), RxwebValidators.maxLength({ value: 11, message: 'يجب ان لا يتجاوز رقم الهاتف 11 رقم' })]),
    country: new FormControl<any>(null, [RxwebValidators.required({ message: 'يرجى اختيار محافظة' })]),
  });
  reserveMailBoxForm = new FormGroup({
    name: new FormControl<string>("", [RxwebValidators.required({ message: ' الاسم  حقل مطلوب' })]),
    email: new FormControl<string>("", [RxwebValidators.required({ message: 'البريد الالكتروني حقل مطلوب' }), RxwebValidators.email({ message: 'البريد الالكتروني غير صالح' })]),
    phone: new FormControl<string>("", [RxwebValidators.required({ message: 'رقم االهاتف حقل مطلوب' }), RxwebValidators.maxLength({ value: 11, message: 'يجب ان لا يتجاوز رقم الهاتف 11 رقم' })]),
  });
  clientMessageForm = new FormGroup({
    Name: new FormControl<string>("", [RxwebValidators.required({ message: ' الاسم  حقل مطلوب' })]),
    Logo: new FormControl<string>("", [RxwebValidators.required({ message: 'الصورة الشخصية حقل مطلوب' })]),
    Message: new FormControl<string>("", [RxwebValidators.required({ message: 'رايك حقل مطلوب' })]),
  });
  countries: CountryDto[] = [];
  clientMessagePaging!: PagingDto;
  clientMessageTotal: number = 0;
  clientMessages: any;
  branches: BranchDto[] = [];
  visibleCustomerMessage: boolean = false;
  trakingShipmientLoading: boolean = false;
  reserveMailBoxLoading: boolean = false;
  clientMessageLoading: boolean = false;
  fileName: string = '';
  @ViewChild('file') file: any;
  constructor(private homeService: HomeService,
    private router: Router,
    private toastMessageService: ToastMessageService) { }
  ngOnInit(): void {
    this.homeService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      }
    })
    this.getFirstClientMessages();
    this.homeService.getBranches().subscribe({
      next: (data) => {
        this.branches = data;
      },
    })
    this.clientMessageForm.get("Logo")?.setValue("");
  }
  trakingShipmient() {
    if (this.shipmentForm.invalid) {
      dispalyFormErrors(this.shipmentForm);
      return;
    }
    this.trakingShipmientLoading = true;
    setTimeout(() => {
      this.homeService.setShipmentTrackingValue(this.shipmentForm.value);
      this.router.navigate(["/folow-order"]);
      this.shipmentForm.reset();
      this.trakingShipmientLoading = false;
    }, 500);
  }
  reserveMailBox() {
    if (this.reserveMailBoxForm.invalid) {
      dispalyFormErrors(this.reserveMailBoxForm);
      return;
    }
    this.reserveMailBoxLoading = true;
    this.homeService.reserveMailBox(this.reserveMailBoxForm.value as ReserveMailBoxDto).subscribe({
      next: (data) => {
        this.toastMessageService.showSuccess('نجاح', 'تم الارسال بنجاح');
        this.reserveMailBoxLoading = false;
        this.reserveMailBoxForm.reset();
      },
      error: (err) => {
        this.reserveMailBoxLoading = false;
        this.toastMessageService.showError('خطأ', '  حدث خطأ ما يرجى المحاولة مرة اخرى');
      },
    })
  }
  getFirstClientMessages() {
    this.clientMessagePaging = {
      Page: 1,
      RowCount: 1
    };
    this.getClientMessages();
  }
  getNextClientMessages() {
    if (this.clientMessageTotal > this.clientMessagePaging.Page) {
      this.clientMessagePaging = {
        Page: this.clientMessagePaging.Page + 1,
        RowCount: 1
      };
      this.getClientMessages();
    }
  }
  getPreviousClientMessages() {
    if (this.clientMessagePaging.Page > 1) {
      this.clientMessagePaging = {
        Page: this.clientMessagePaging.Page - 1,
        RowCount: 1
      };
      this.getClientMessages();
    }
  }
  getClientMessages() {
    this.homeService.getClientMessages(this.clientMessagePaging).subscribe({
      next: (data) => {
        this.clientMessages = data.data[0];
        this.clientMessageTotal = data.total;
      },
    })
  }
  onUploadClientPhoto(event: any) {
    this.fileName = event.currentFiles[0].name;
    this.clientMessageForm.get("Logo")?.setValue(event.currentFiles[0]);
    this.file?.clear();
  }
  clearFile() {
    this.file?.clear();
    this.clientMessageForm.get("Logo")?.setValue(null);
  }
  createClientMessage() {
    if (this.clientMessageForm.invalid) {
      dispalyFormErrors(this.clientMessageForm);
      return;
    }
    this.clientMessageLoading = true;
    this.homeService.createClientMessages(this.clientMessageForm.value as ClientMessageDto).subscribe({
      next: (data) => {
        this.visibleCustomerMessage = false;
        this.clientMessageForm.reset();
        this.getClientMessages();
        this.clientMessageLoading = false;
        this.toastMessageService.showSuccess('نجاح', ' تم الارسال بنجاح ,');
      },
      error: (err) => {
        this.clientMessageLoading = false;
        this.toastMessageService.showError('خطأ', '  حدث خطأ ما يرجى المحاولة مرة اخرى');
      },
    })
  }
}
