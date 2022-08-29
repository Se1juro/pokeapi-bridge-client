import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { teams } from 'src/app/constants/teams.constants';
import { signUp } from 'src/app/state/actions/auth.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLogged } from 'src/app/state/selectors/auth.selector';
import { IBodySignUp } from '../interfaces/bodySignUp.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() loggedIn: boolean = false;
  public form!: FormGroup;
  public teams = teams;
  public selectedTeam: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      nickName: ['', Validators.required],
      password: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

  onSubmitSignUp() {
    let body: IBodySignUp = {
      nickName: this.form.value.nickName,
      password: this.form.value.password,
      team: this.form.value.team,
      name: this.form.value.name,
    };
    this.store.dispatch(signUp(body));
    this.store.select(selectLogged).subscribe((res) => {
      this.loggedIn = res;
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }
}
