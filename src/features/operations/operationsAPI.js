import axios from "axios";
import authHeaders from "../../app/network/authHeaders";

const API_URL = "http://localhost:8080/"

export async function submitOperation(body) {
  const response = await axios.post(API_URL + "v1/services/", body, 
  {
    headers: authHeaders() 
  });

  return response.data;
}