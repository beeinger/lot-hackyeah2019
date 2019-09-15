import axios from "axios";

export class BackendService {
  constructor() {}

  static urlPrefix = "https://api.lot.com/flights-dev/v2";
  static xApiKey = "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg";
  static accessToken = "dfret34o5sf34lw2er8uy53kg.bfm234";

  static async checkAvailbilty(params) {
    const url = BackendService.urlPrefix + "/booking/availability";
    const response = await axios.post(
      url,
      { params },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-Api-Key": BackendService.xApiKey,
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken")
        }
      }
    );
    const error = response.data.error;
    if (error) {
      return { error: response.data.message };
    }
    console.log(response.data);
    return response.data;
  }

  static async getFeed() {
    const userId = window.sessionStorage.getItem("userId");
    if (userId === null) {
      console.log("aaa");
      return [];
    }
    const url = "https://lot-back.herokuapp.com/api/places/" + String(userId);

    const response = await axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });

    return response.data;
  }

  static async getToken() {
    const secretKey = "2przp49a52";
    const xApiKey = "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg";

    const url = BackendService.urlPrefix + "/auth/token/get";
    const response = await axios.post(
      url,
      {
        secret_key: secretKey
      },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-Api-Key": xApiKey
        }
      }
    );
    const error = response.data.error;
    if (error) {
      return { error: response.data.message };
    }
    console.log(response.data.access_token);
    const accessToken = response.data.access_token;
    window.sessionStorage.setItem("accessToken", accessToken);
  }
}
