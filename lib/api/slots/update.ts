import AsyncStorage from "@react-native-async-storage/async-storage";
import API_BASE_URL from "../../../constants/apiBaseUrl";
import Slot from "../../classes/slot";

export default async function updateSlot(slot: Slot): Promise<Slot> {
  const slotDTO = await fetch(`${API_BASE_URL}/api/slots/${slot.id}`, {
    method: "PUT",
    headers: {
      Authorization:
        (await AsyncStorage.getItem(`Game${slot.row.game.id}`)) || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // We can only update the value of the slot, so there's no need to send the rest of the slot.
      value: slot.value,
    }),
  }).then((res) => res.json());
  return new Slot(slot.row, slotDTO);
}
