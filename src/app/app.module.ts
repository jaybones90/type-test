import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { D3Service } from 'd3-ng2-service';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TypingTestComponent } from './typing-test/typing-test.component';
import { CheckTextPipe } from './check-text.pipe';
import { KeysPipe } from './keys.pipe';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayerComponent } from './player/player.component';
import { RoundsPipe } from './rounds.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TypingTestComponent,
    CheckTextPipe,
    KeysPipe,
    NewPlayerComponent,
    PlayerComponent,
    RoundsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
