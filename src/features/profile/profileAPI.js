import axios from "axios";
import authHeaders from "../../app/network/authHeaders";
import API_URL from "../../app/network/api";

export async function getProfile() {
  const response = await axios.get(API_URL + "v1/users/profile", 
  {
    headers: authHeaders() 
  });

  return response.data;
}