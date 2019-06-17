import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {

  @Input() player: Player;
  @Output() removed = new EventEmitter();
  @Output() reseted = new EventEmitter();

  removePlayer() {
    this.removed.emit(this.player);
  }
  resetPlayer() {
    this.reseted.emit(this.player);
  }

}
