import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  private formSubmitAttempt!: boolean;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['tony@anything.com', Validators.required],
      password: ['ok', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)!.valid && this.form.get(field)!.touched) ||
      (this.form.get(field)!.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.accountService.login(this.form.value); 
    }
    this.formSubmitAttempt = true;             
  }
}
