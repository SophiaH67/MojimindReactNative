import RowDTO from "./row.dto";

export default interface GameDTO {
  id: number;
  // For some reason the code_length is returned as a string with an integer inside.
  code_length: string;
  score?: number;
  // Same as above.
  turn: string;
  // Same again...
  selected_emoji: string;
  // It's a string with 0 or 1,
  won: string;
  // Guess what? It's the fucking same.
  lost: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  rows: RowDTO[];
}