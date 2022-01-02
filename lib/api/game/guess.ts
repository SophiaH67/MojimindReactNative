import AsyncStorage from "@react-native-async-storage/async-storage";
import API_BASE_URL from "../../../constants/apiBaseUrl";
import Game from "../../classes/game";

export default async function guessGame(game: Game): Promise<Game> {
  const res = await fetch(`${API_BASE_URL}/api/games/${game.id}/guess`, {
    method: "POST",
    headers: {
      Authorization: (await AsyncStorage.getItem(`Game${game.id}`)) || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      selected_emoji: game.selected_emoji,
    }),
  });
  // If the response is 401, the auth token is invalid. So we throw an error.
  if (res.status === 401) {
    throw new Error("Invalid auth token");
  }
  const gameDTO = await res.json();
  return new Game(gameDTO);
}
