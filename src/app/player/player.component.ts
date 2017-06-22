import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]
})
export class PlayerComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  playerId: string;
  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) {}


  ngOnInit() {
    this.players = this.playerService.getPlayers();
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
      this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }
}
