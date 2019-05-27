import { Component } from '@angular/core';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  players: Player[] = [
    {name: 'Петр', level: 1, bonuses: 1},
    {name: 'Иван', level: 1, bonuses: 2}];

  addPlayer() {

  }

  removePlayer(player: Player) {
    this.players = this.players.filter(p => p.name !== player.name);
  }

  clearGame() {
    this.players = [];
  }
}
