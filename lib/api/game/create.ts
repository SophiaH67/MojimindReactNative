import AsyncStorage from "@react-native-async-storage/async-storage";
import API_BASE_URL from "../../../constants/apiBaseUrl";
import Game from "../../classes/game";

export default async function createGame(codeLength: number): Promise<Game> {
  const gameDTO = await fetch(`${API_BASE_URL}/api/games`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code_length: codeLength,
    }),
  }).then((res) => res.json());
  await AsyncStorage.setItem(`Game${gameDTO.id}`, gameDTO.auth_token);
  return new Game(gameDTO);
}
