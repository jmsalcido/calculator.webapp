import axios from "axios";
import authHeaders from "../../app/network/authHeaders";

const API_URL = "http://localhost:8080/"

export async function getServices(serviceType, page, size) {
  const response = await axios.get(API_URL + "v1/services/", 
  {
    params: {
        serviceType,
        page,
        size
    },
    headers: authHeaders() 
  });

  return response.data;
}

export async function deleteService(serviceId) {
  const response = await axios.delete(API_URL + "v1/services/delete/" + serviceId,
  {
    headers: authHeaders()
  });

  return response.data;
}

export async function updateService(service) {
  const response = await axios.put(API_URL + "v1/services/update/",
  {
    id: service.id,
    uuid: service.uuid,
    status: service.status,
    type: service.type,
    cost: service.cost,
  },
  {
    headers: authHeaders()
  });

  return response.data;
}