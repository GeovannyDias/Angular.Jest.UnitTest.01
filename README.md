# Angular, Jest, UnitTest
Unit Test with Angular and Jest

# App.Marvel.Web.Test.II
App Marvel, Angular, Heroku - marvel - API


## Demo

- :point_right: [Live Demo](https://test-geo-app-marvel.web.app/)
- :computer: [Author](https://github.com/GeovannyDias)


## Run Project

```
$ cd \AppChapter\

npm i
ng serve --open

```

## INTERACTIVE API TESTER

* **https://documenter.getpostman.com/view/13245906/UVsEUURp#895ae888-1a5d-4d48-aeb0-223215f14373**

```
The link displays documentation all endpoints, parameters and error messages available to the Marvel API.

```

## Unit test (Jest)

* **https://github.com/briebug/jest-schematic**
* **https://github.com/just-jeb/angular-builders/tree/master/packages/jest**


```
This schematic will configure Angular to execute unit tests with Jest for single projects or workspaces.

ng add @briebug/jest-schematic

Note: @briebug/jest-schematic v4.0.0 with Angular >= v14.0.0

Jest builder for Angular build facade (Prerequisites):

    - Angular CLI 14
    - Jest 28

```

## Solve - Compatibility Issues (Angular <= 13)

* **https://thymikee.github.io/jest-preset-angular/docs/guides/angular-13+/**
* **https://jestjs.io/versions**
* **https://openbase.com/js/@jest/types/versions**
* **https://openbase.com/js/@angular-builders/jest/versions**
* **https://gist.github.com/Klerith/ca4573d13844f53af3ff68846a238fc3**
* **https://blog.agence-kse.fr/how-to-install-jest-in-angular-13**
* **https://angular.io/guide/releases**

```
- Install:

$> ng add @briebug/jest-schematic → v4.0.0 (latest)
    
    jest-schematic will remove Jasmine and karma automatically

$> rm -rf node_modules

$> npm i

    npm ERR! Found: @angular-devkit/build-angular@13.3.8
    npm ERR! node_modules/@angular-devkit/build-angular
    npm ERR!   dev @angular-devkit/build-angular@"~13.3.0" from the root project
    npm ERR!
    × Package install failed, see above.

- Change package.js ("latest")

    "devDependencies": {
        "@angular-builders/jest": "latest",
        "@angular-devkit/build-angular": "~13.3.0",
        "@angular/cli": "~13.3.0",
        "@angular/compiler-cli": "~13.3.0",
        "@briebug/jest-schematic": "^4.0.0",
        "@types/jest": "latest",
        "@types/node": "^12.11.1",
        "jest": "latest",
        "typescript": "~4.6.2"
    }

    to

    "devDependencies": {
        "@angular-builders/jest": "^13.0.4",
        "@angular-devkit/build-angular": "~13.3.0",
        "@angular/cli": "~13.3.0",
        "@angular/compiler-cli": "~13.3.0",
        "@briebug/jest-schematic": "^4.0.0",
        "@types/jest": "^27.5.1",
        "@types/node": "^12.11.1",
        "jest": "^27.5.1",
        "typescript": "~4.6.2"
    }

- Again install dependecies:

    $> npm i

Successful!

```

## Semver explained - why are there caret (^) and tilde (~) in my package.json?

* **https://bytearcher.com/articles/semver-explained-why-theres-a-caret-in-my-package-json/**
* **https://es.stackoverflow.com/questions/2253/qu%C3%A9-significan-los-s%C3%ADmbolos-antes-del-n%C3%BAmero-de-versi%C3%B3n-en-el-package-json**

```
  3   	.   	9	    .	    2
major		  minor		      patch

version "Exactamente esta versión"

~version "Aproximadamente equivalente a la versión" [~3.9.2 → 3.9.*]

^version "Compatible con la versión" [^3.9.2 → 3.*.*]

```

## Sonar (sonar cloud)

```
Sonar es el nombre que se utilizaba para referirse a la herramienta SonarQube.
Esta herramienta open source que nos permite hacer un análisis estático del código de un proyecto,
detectando malas prácticas, posibles errores y bugs.
```

## Fernando Herrera (Unit Test)
* **https://github.com/Klerith/angular-youtube-testing/blob/03-pruebas-servicio-http/src/app/app.module.ts**



## Entendiendo Code coverage usando Jest
* **https://jackfiallos.com/entendiendo-code-covereage-usando-jest**

```
Este es el informe generado con las pruebas del archivo isImage.spec.js. 
Y este Informe dice que del 100% del umbral de cobertura esperado a cubrirse, 
solamente el 85.71% fue satisfactoriamente probado y revisado, aparte de que 
se alcanzó a verificar el 85.71% para statements (Stmts), 50% de Branches, 
100% de funciones (Funcs) y 85.71% de líneas funcionales (Lines) y que se quedaron 
11 líneas de código sin revisar.

Y para entender mejor que significa cada una de las columnas:


-Stmts Se refiere a todas las delcaraciones del programa.

-Branch Se refiere a cada rama (también denominada ruta DD) de cada estructura de control 
(como en las declaraciones if y case), por ejemplo, dada una declaración if, 
¿se han ejecutado las ramas verdadera y falsa? Otra forma de decir esto es, 
¿se han ejecutado todos los bordes del programa?.

-Funcs Se refiere al llamado de las funciones o subrutinas del programa.

-Lines Se refiere a cada línea ejecutable en el archivo fuente.

```


## Result

![image](https://user-images.githubusercontent.com/23192401/160305856-a2d15c63-eea7-4ff9-8d77-50ae1bedd7f2.png)

