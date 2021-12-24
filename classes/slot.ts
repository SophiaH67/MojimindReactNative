import SlotDTO from "../interfaces/slotDTO";
import { updateSlot } from "../lib/api";
import Row from "./row";

export default class Slot {
  row: Row;
  id: number;
  _value: number;
  hint: number;
  created_at: Date;
  updated_at: Date;
  constructor(row: Row, slot: SlotDTO) {
    this.row = row;
    this.id = slot.id;
    this._value = parseInt(slot.value);
    this.hint = parseInt(slot.hint);
    this.created_at = new Date(slot.created_at);
    this.updated_at = new Date(slot.updated_at);
  }
  
  get value() {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
    updateSlot(this);
  }
}