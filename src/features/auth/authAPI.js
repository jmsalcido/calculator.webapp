import axios from "axios";
import history from '../../app/history';

const API_URL = "http://localhost:8080/"

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
  