import RowDTO from "../interfaces/row.dto";
import Game from "./game";
import Slot from "./slot";

export default class Row {
  id: number;
  game: Game;
  slots: Slot[];
  created_at: Date;
  updated_at: Date;
  constructor(game: Game, row: RowDTO) {
    this.game = game;
    this.slots = row.slots.map((slot) => new Slot(this, slot));
    this.id = row.id;
    this.created_at = new Date(row.created_at);
    this.updated_at = new Date(row.updated_at);
  }
}
