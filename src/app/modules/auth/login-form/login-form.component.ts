import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/state/actions/auth.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLogged } from 'src/app/state/selectors/auth.selector';
import { IBodyLogin } from '../interfaces/bodyLogin.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Input() loggedIn: boolean = false;
  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nickName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitLogin() {
    let body: IBodyLogin = {
      nickName: this.form.value.nickName,
      password: this.form.value.password,
    };
    this.store.dispatch(login(body));
    this.store.select(selectLogged).subscribe((res) => {
      this.loggedIn = res;
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }
}
