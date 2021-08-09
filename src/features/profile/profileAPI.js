import axios from "axios";
import authHeaders from "../../app/network/authHeaders";

const API_URL = "http://localhost:8080/"

export async function getProfile() {
  const response = await axios.get(API_URL + "v1/users/profile", 
  {
    headers: authHeaders() 
  });

  return response.data;
}