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

export async function deleteUser(userId) {
  const response = await axios.delete(API_URL + "v1/users/delete/" + userId,
  {
    headers: authHeaders() 
  });

  return response.data;
}

export async function updateUser(user) {
  const response = await axios.put(API_URL + "v1/users/update/",
  {
    id: user.id,
    username: user.username,
    uuid: user.uuid,
    role: user.role,
    status: user.status,
    userBalance: user.userBalance,
  },
  {
    headers: authHeaders()
  });

  return response.data;
}