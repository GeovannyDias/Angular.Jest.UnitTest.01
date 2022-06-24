# Firebase - One project, multiple sites! Plus a boost in upload speed!

* **https://firebase.googleblog.com/2018/08/one-project-multiple-sites-plus-boost.html**
* **https://firebase.google.com/docs/hosting/multisites#cli-commands-with-deploy-targets**

```
Primero: Agregar sitio en firebase:

test-geo-app-marvel


firebase init


? What do you want to use as your public directory? dist/app-chapter      
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/app-chapter/index.html already exists. Overwrite? (y/N) N


Example:

firebase target:apply hosting target-name site-name
firebase target:apply hosting blog my-cool-blog
firebase deploy --only hosting:blog


Exec:

firebase target:apply hosting app-marvel test-geo-app-marvel

Configure targets for multiple sites in firebase.json:

{
  "hosting": {
    "target": "app-marvel",
    "public": "dist/app-chapter",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

firebase deploy --only hosting:app-marvel

```

## emoji-cheat-sheet - Icons *.md

* **https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#smileys--emotion**

