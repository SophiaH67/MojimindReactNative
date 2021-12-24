import Game from "../classes/game";
import Slot from "../classes/slot";

const API_BASE_URL = "http://192.168.1.242:8000"

//#region Game
export const getGame = async (id: number): Promise<Game> => {
  const gameDTO = await fetch(`${API_BASE_URL}/api/games/${id}`).then(res => res.json());
  return new Game(gameDTO);
}

export const updateGame = async (game: Game): Promise<Game> => {
  const gameDTO = await fetch(`${API_BASE_URL}/api/games/${game.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // We can only update the selected emoji, so there's no need to send the rest of the game.
      selected_emoji: game.selected_emoji,
    })
  }).then(res => res.json());
  return new Game(gameDTO);
}
//#endregion

//#region Slots
export const updateSlot = async (slot: Slot): Promise<Slot> => {
  const slotDTO = await fetch(`${API_BASE_URL}/api/slots/${slot.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // We can only update the value of the slot, so there's no need to send the rest of the slot.
      value: slot.value,
    })
  }).then(res => res.json());
  return new Slot(slot.row, slotDTO);
}
//#endregion