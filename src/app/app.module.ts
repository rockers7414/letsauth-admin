import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtModule } from '@auth0/angular-jwt';

import { routing } from './app.routing';
import { AuthGuard } from './auth.guard';

import { AuthService } from './auth.service';
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { AdminComponent } from './admin/admin.component';
import { ClientMgmtComponent } from './client-mgmt/client-mgmt.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserCreateComponent,
    UserInfoComponent,
    UserListComponent,
    UserMgmtComponent,
    AdminComponent,
    ClientMgmtComponent,
    ClientCreateComponent,
    ClientListComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000']
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
