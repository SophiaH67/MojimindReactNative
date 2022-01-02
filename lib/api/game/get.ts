import API_BASE_URL from "../../../constants/apiBaseUrl";
import Game from "../../classes/game";

export default async function getGame(id: number): Promise<Game> {
  const gameDTO = await fetch(`${API_BASE_URL}/api/games/${id}`).then((res) =>
    res.json()
  );
  return new Game(gameDTO);
}
