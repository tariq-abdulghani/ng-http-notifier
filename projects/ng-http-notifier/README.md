# HttpNotifier

Library for handeling Http reponse .

## Project Goals:
1. configurable Notification messages per(uri, method, status)
	can use server response
	each notification has 4 basic Severity levels
	- info
	- success
	- warning
	- error

    use `assets/config/http-notification-config.json` file to configure notification messages
    no need to redeploy if you want to change some message.
<br>

2. Plugable Toastr providers
	if any advanced Toastr exists
	it can be used and also can be configured
<br>

3. UI consistency 
    if you are using ui libraries like prime - boot strap- material that has their own toastr
    just just provide `ToastrService`  implementation  that uses the toolkit toastr.
<br>

4. for i18n
    just provide Toastr that implements NotifierToastr interface that has translation cabability
<br>

5. Has Default Impel(provider)
    its not good and not recommended its alert `alret()`.
    just use your favorite toastr library or what matches UI
    library you use ex angular material, primeng

## Repositories

[source on github ](https://github.com/tariq-abdulghani/ng-http-notifier)

## Install
`npm i ngx-ngx-http-notifier`
## contents

1. [Getting started](#how-to-use)
2. [Use Case generate notification with ngx-toastr](#use-ngx-toastr-for-notification)


## Getting Started
first create `assets/config/http-notification-config.json` file make sure of correct path and file name
add some configurations
its an object with property config witch is a list of endpoint configs
```json
{
    "config": [

        {
      "url": "",
      "method": "",
      "messages": [
        {
          "message": "success",
          "status": 200,
          "severity": "success",
          "useResponseBody": true
        }
      ]
    }

    ]
}
```
the above configuration matches any method any url with status 200

for the default impl add the module to your app imports  its ugly not recommended
`NgHttpNotifierModule.forRoot()`


## Use ngx-toastr for notification
install [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) and its dependencies

create new module called app-notifier.module.ts it will provide toastr service and configurations
```typesctipt
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
})
export class AppNotifierModule {}
```
create toaster provider which extends `ToastrService` from `"ng-http-notifier"`

```typesctipt
import { Injectable } from "@angular/core";
import { ToastrService } from "ng-http-notifier";
import { ToastrService as NgXToasterService}  from 'ngx-toastr';


@Injectable()
export class NgxToastrProviderService extends ToastrService{

    constructor(private ngXToasterService: NgXToasterService){
        super();
    }

    override info(message: string, options?: any): void {
        this.ngXToasterService.info(message);
    }
    override success(message: string, options?: any): void {
        this.ngXToasterService.success(message);
    }
    override warning(message: string, options: any): void {
        this.ngXToasterService.warning(message);
    }
    override error(message: string, options?: any): void {
        this.ngXToasterService.error(message);
    }

}
```
configure `NgHttpNotifierModule` to use `NgxToastrProviderService`
```
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgHttpNotifierModule.forRoot(NgxToastrProviderService), // confiured toastr provider
  ],
})
export class AppNotifierModule {}
```

now you provide any impelmentation not just ngx-toastr use the same way to enhance the functionality
example translation just configure the module with provider that has translation capabilities.

## Interfaces
`http-notification-config.json` will be loaded as an instance of `HttpNotificationConfig` and this is the `JSON` configuration file structure.
```typescript
interface HttpNotificationConfig{
    config: EndpointNotificationConfig[];
}

interface EndpointNotificationConfig{
    method: string;
    url: string;
    messages: NotificationMessageConfig[];
}

interface NotificationMessageConfig{
    status: string; // http status codes
    message: string;
    useResponseBody?: boolean; // to use return body of server response
    severity: 'info'|'success'|'warrning'|'error';
    options?: {[x:string]: any} 
}


abstract class ToastrService{
    abstract info(message: string , options?:any):void;
    abstract success(message: string , options?:any):void;
    abstract warning(message: string , options:any):void;
    abstract error(message: string , options?:any):void;
}

// default provider 
@Injectable()
export class AlertToastrProvider extends ToastrService{

    override info(message: string, options?: any): void {
        this.showAlert(message);
    }
    override success(message: string, options?: any): void {
        this.showAlert(message);
    }
    override warning(message: string, options: any): void {
        this.showAlert(message);
    }
    override error(message: string, options?: any): void {
        this.showAlert(message);
    }

    private showAlert(message: string):void{
        console.log("showAlert", message);
        alert(message);
    }
}

```