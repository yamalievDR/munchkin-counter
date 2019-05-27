import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  @Output() removed = new EventEmitter();

  constructor() {
  }

  removePlayer() {
    this.removed.emit(this.player);
  }

  ngOnInit() {
  }

}
