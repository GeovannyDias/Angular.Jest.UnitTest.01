# Angular testing con JEST (Config)

1. Remover cualquier referencia de Jasmine / Karma en el package.json
```
npm remove <karma karma-chrome-launcher...>

npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

or

npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

```

2. Instalar Jest
```
npm install --save-dev jest jest-preset-angular @types/jest
```

3. Crear el ```setup-jest.ts``` en la carpeta root del proyecto y el contenido es el siguiente
```setup-jest.ts
import 'jest-preset-angular/setup-jest';
```

4. Agregar en el package.json, la configuración de Jest
```package.json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```


4. Configurar JEST en tsconfig.json y tsconfig.spec.json
```tsconfig.json
"types": [
  "jest"
]
```

5. Configurar los comandos para ejecutar las pruebas en el package.json
```package.json
"test": "jest",
"test:watch": "jest --watchAll"
```

6. Remover karma.config.js y el archivo src/test.ts

7. $> npm run test:watch

8. Warning (esModuleInterop - tsconfig.json)

```
ts-jest[config] (WARN) message TS151001: If you have issues related to imports, 
you should consider setting `esModuleInterop` to `true` in your TypeScript 
configuration file (usually `tsconfig.json`). See 
https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability 
for more information.



```