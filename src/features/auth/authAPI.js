import axios from "axios";
import history from '../../app/history';
import API_URL from "../../app/network/api";

export async function logInAPI(username, password) {
    const response = await axios.post(API_URL + "v1/users/login", {
        username,
        password
    });

    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    history.push("/");

    return response.data;
  }
  