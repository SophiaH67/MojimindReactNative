import SlotDTO from "./slotDTO";

export default interface RowDTO {
  id: number;
  game_id: string;
  created_at: string;
  updated_at: string;
  slots: SlotDTO[];
}