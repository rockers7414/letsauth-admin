import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
		private router: Router,
		public auth: AuthService,
		public translate: TranslateService
	) {
		translate.setDefaultLang('en-US');
		translate.use('en-US');
	}

	logout() {
		this.auth.logout();
		this.router.navigate(['login']);
	}

}
