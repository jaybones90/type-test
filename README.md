# TypeTest

This is a web application that is a typing test for programmers to test their keyboard skills. It allows the user to create new player and then select a language to practice. The program returns your score for characters per minute and shows you which keys you missed and how many times you missed that key. It also uses the D3 Javascript library to generate cool graphics based on correct/incorrect keystrokes.

* View live app deployed on Firebase: https://typing-test-f658d.firebaseapp.com/

### Setup/Install Requirements

* Make sure you have the [Angular CLI](https://github.com/angular/angular-cli) installed
* Create a [Firebase](https://firebase.google.com/) account and then a new Firebase project and seed it with the seed-data.json file within this projects root folder.
* Create an 'api-keys.ts' file within src/app and copy in the intialize Firebase code from your newly created project in Firebase. Then change 'var config' to 'export var masterFirebaseConfig'
* Make sure this code is in the app.module.ts file within app/src -
 ```javascript
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
```

Run these following commands in the terminal to install dependencies
* `bower install`
* `npm install`

Run this command to build in development mode
* `ng build`

Run this command to launch the server
* `ng serve`

### Known Bugs
* No known bugs. Please submit a pull request, leave a comment, or email with any discovered bugs.

### Technologies Used
* Angular
* Typescript
* Firebase
* npm
* bower

### By Authors
Jason Ainsworth
### Support and contact details
jasoncruze@gmail.com
### License
_MIT_
Copyright (c) 2017 **Jason Ainsworth**
