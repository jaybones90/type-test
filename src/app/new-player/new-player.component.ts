import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayerService]
})
export class NewPlayerComponent implements OnInit {
  addForm: boolean = false;
    showAddForm() {
    if(this.addForm === true) {
      this.addForm = false;
    } else {
      this.addForm = true;
    }
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string,
      image: string,
      bio: string) {
      const NEWPLAYER: Player = new Player(name, bio, image);
      this.playerService.addPlayer(NEWPLAYER);
       console.log(NEWPLAYER);
    }
}
