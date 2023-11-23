import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HomeService } from 'src/app/_services/home.service';
import { ToastMessageService } from 'src/app/_services/toast-message.service';
import { dispalyFormErrors } from 'src/app/_sheard/validator';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.scss']
})
export class JoinTeamComponent implements OnInit {
  joinTeamForm = new FormGroup({
    firstName: new FormControl<string>("", [RxwebValidators.required({ message: 'الاسم الاول حقل مطلوب' })]),
    lastName: new FormControl<string>("", [RxwebValidators.required({ message: ' الكنية حقل مطلوب' })]),
    file: new FormControl<any>(null, [RxwebValidators.required({ message: ' السيرة الذاتية حقل مطلوب' })]),
    email: new FormControl<string>("", [RxwebValidators.required({ message: ' البريد الالكتروني حقل مطلوب' }), RxwebValidators.email({ message: 'البريد الالكتروني غير صالح' })]),
    phone: new FormControl<string>("", [RxwebValidators.required({ message: ' رقم الجوال حقل مطلوب' }), RxwebValidators.maxLength({ value: 11, message: 'يجب ان لا يتجاوز رقم الجوال 11 رقم' })]),
  });
  fileName: string = "";
  loading: boolean = false;
  @ViewChild('file') file: any;
  constructor(private homeService: HomeService,
    private toastMessageService: ToastMessageService) { }
  ngOnInit(): void {
    this.joinTeamForm.get("file")?.setValue("");
  }
  uploadFile(event: any) {
    this.fileName = event.currentFiles[0].name;
    this.joinTeamForm.controls["file"]?.setValue(event.currentFiles[0]);
    this.file?.clear();
  }
  clearFile() {
    this.file?.clear();
    this.joinTeamForm.get("file")?.setValue(null);
  }
  joinToTeam() {
    if (this.joinTeamForm.invalid) {
      dispalyFormErrors(this.joinTeamForm);
      return;
    }
    this.loading = true;
    this.homeService.joinToTeam(this.joinTeamForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.toastMessageService.showSuccess("نجاح", "تم ارسال طلب انضمامك بنجاح سيتم التواصل معك عبر بريدك الالكتروني");
        this.joinTeamForm.reset();
      },
      error: () => {
        this.loading = false;
        this.toastMessageService.showError("خطأ", "حدث خطأ ما يرجى المحاولة مرة اخرى");
      }
    })
  }
}
