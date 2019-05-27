import { Component } from '@angular/core';
import { Player } from './models/player';
import { MatDialog } from '@angular/material';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  players: Player[] = [];

  constructor(public dialog: MatDialog) {
  }

  addPlayer() {
    const dialogRef = this.dialog.open(AddPlayerComponent, {
      width: '500px',
    });

    dialogRef.afterClosed()
      .pipe(filter(name => !!name && !this.players.map(p => p.name).includes(name)))
      .subscribe(result => {
        this.players = [...this.players, {name: result, level: 1, bonuses: 0}];
      });
  }

  removePlayer(player: Player) {
    this.players = this.players.filter(p => p.name !== player.name);
  }

  clearGame() {
    this.players = [];
  }
}
