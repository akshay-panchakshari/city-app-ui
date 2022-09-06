# City App Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Reference

Features covered-
  01) Login
  02) browse through the paginated list of cities with the corresponding photos
  03) search by the name
  04) Edit city details (only allowed for user with ROLE_ALLOW_EDIT role)
  05) APIs are secured with spring security basic auth
  

You can login with below two users 
  01) username "user" with password "userpass" with "ROLE_READ_ONLY" role 
  02) username "admin" with password "adminpass" with "ROLE_ALLOW_EDIT" role  
  
Note: only admin can edit the city details


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
