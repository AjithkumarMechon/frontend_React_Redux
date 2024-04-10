import axios from "axios";

const config = () => {
  return {
    headers: {
      "content-type": "application/json",
    },
  };
};
export class http {
  static async doGet(url) {
    return await axios.get(url, config());
  }
  static async doDelete(url) {
    return await axios.delete(url, config());
  }
  static async doPost(url, payload) {
    return await axios.post(url, payload, config());
  }
}
