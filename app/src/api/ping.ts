import { API_URL } from "../core/constants";

class Ping {
  static async getPing() {
    const response = await fetch(`${API_URL}/ping`);
    const data = await response.json();
    return data;
  }
}

export default Ping;
