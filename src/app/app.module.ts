import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';

const appRoutes: Routes=[
  {path: '', component:AngularComponent},
  {path:'javascript', component:JavascriptComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent,
    NodejsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
