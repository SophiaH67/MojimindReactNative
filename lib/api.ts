import AsyncStorage from "@react-native-community/async-storage";
import Game from "../classes/game";
import Slot from "../classes/slot";

const API_BASE_URL = "http://192.168.1.242:8000"

//#region Game
export const getGame = async (id: number): Promise<Game> => {
  const gameDTO = await fetch(`${API_BASE_URL}/api/games/${id}`).then(res => res.json());
  return new Game(gameDTO);
}

export const createGame = async (codeLength: number): Promise<Game> => {
  const gameDTO = await fetch(`${API_BASE_URL}/api/games`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      code_length: codeLength
    })
  }).then(res => res.json());
  await AsyncStorage.setItem(`Game${gameDTO.id}`, gameDTO.auth_token);
  return new Game(gameDTO);
}

export const updateGame = async (game: Game): Promise<Game> => {
  console.log(`Updating game ${game.id} with emoji ${game.selected_emoji}`);
  const res = await fetch(`${API_BASE_URL}/api/games/${game.id}`, {
    method: "PUT",
    headers: {
      "Authorization": await AsyncStorage.getItem(`Game${game.id}`) || "",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // We can only update the selected emoji, so there's no need to send the rest of the game.
      selected_emoji: game.selected_emoji,
    })
  });
  // If the response is 401, the auth token is invalid. So we throw an error.
  if (res.status === 401) {
    throw new Error("Invalid auth token");
  }
  const gameDTO = await res.json();
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