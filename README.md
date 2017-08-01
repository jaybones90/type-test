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
* navigate to 'localhost:4200' in the browser 

### Known Bugs
* No known bugs. Please submit a pull request, leave a comment, or email with any discovered bugs.

### Technologies Used
* Angular
* Typescript
* Firebase
* npm
* bower

### By Authors
* Jason Ainsworth
* Kai de Rochemont
* Monique St. Laurent
* Mohamed J Warsame

### Support and contact details
jasoncruze@gmail.com

### License
_MIT_
Copyright (c) Jason Ainsworth, Kai deRochemont, Monique St. Laurent, Mohamed J Warsame

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
