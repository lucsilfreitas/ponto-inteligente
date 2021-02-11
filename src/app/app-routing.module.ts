import { LogarComponent } from './autentcacao/login/components/logar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autentcacao/login/components/login/login.component'


export const LoginRoutes: Routes = [
	{
		path: 'login',
		component: LogarComponent,
		children: [{ path: '', component: LoginComponent }]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(LoginRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
