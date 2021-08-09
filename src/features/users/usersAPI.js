import axios from "axios";
import authHeaders from "../../app/network/authHeaders";

const API_URL = "http://localhost:8080/"

export async function getUsers(username, page, size) {
    const response = await axios.get(API_URL + "v1/users/", 
    {
      params: {
        username,
        page,
        size
      },
      headers: authHeaders() 
    });

    return response.data;
  }
  