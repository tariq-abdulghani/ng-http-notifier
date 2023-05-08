import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { NgHttpNotifierComponent } from './ng-http-notifier.component';
import { NgHttpNotificationHandlerService } from './service/ng-http-notification-handler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrService } from './model/toastr-service';
import { AlertToastrProvider } from './service/alert-toastr-provider';

declare var window: any;


@NgModule({
  declarations: [
    NgHttpNotifierComponent
  ],
  imports: [
  ],
  exports: [
    NgHttpNotifierComponent
  ],
  providers:[{provide: HTTP_INTERCEPTORS, useClass: NgHttpNotificationHandlerService, multi: true},]
})
export class NgHttpNotifierModule {

  constructor() {
    this.load();
  }
  public static forRoot(toasterServiceProvider?: Type<ToastrService>):ModuleWithProviders<NgHttpNotifierModule>{
    return {
      ngModule: NgHttpNotifierModule,
      providers:[
        {provide: ToastrService, useClass: toasterServiceProvider? toasterServiceProvider: AlertToastrProvider}
      ]
    }
  }

  private load():void{
    const CONFIG_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/assets/config/http-notification-config.json`;
    fetch(CONFIG_URL).then(result =>{
      result.json().then(res =>{
        window.HTTP_NOTIFICATION_OBJ = res;
      })
      
    }).catch(err=> console.error);
  }
}
