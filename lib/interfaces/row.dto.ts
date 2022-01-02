import SlotDTO from "./slot.dto";

export default interface RowDTO {
  id: number;
  game_id: string;
  created_at: string;
  updated_at: string;
  slots: SlotDTO[];
}
