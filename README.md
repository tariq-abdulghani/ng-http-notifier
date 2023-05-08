# HttpNotifier
Library for handeling Http reponse .
Project Goals:
1. configurable Notification messages per(uri, method, status)
	can use server response
	each notification has 4 basic Severity levels
	- info
	- success
	- warning
	- error

2. Plugable Toastr providers
	if any advanced Toastr exists
	it can be used and also can be configured


3. ui consistency 
    if you are using ui libraries like prime - boot strap- material that has their own toastr
    just just provide `ToastrService`  implementation  that uses the toolkit toastr.

4. for i18n
    just provide Toastr that implements NotifierToastr interface that has translation cabability

3. Has Default Impel(provider)
    its not good and not recommended its alert `alret()`.
    just use your favorite toastr library or what matches UI
    library you use ex angular material, primeng


------------------------------------------------------------------------------------------------------


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
