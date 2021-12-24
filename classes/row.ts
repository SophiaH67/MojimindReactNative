import RowDTO from "../interfaces/rowDTO";
import SlotDTO from "../interfaces/slotDTO";
import Game from "./game";
import Slot from "./slot";

export default class Row {
  game: Game;
  slots: Slot[];
  constructor(game: Game, row: RowDTO) {
    this.game = game;
    this.slots = row.slots.map(slot => new Slot(this, slot));
  }
}