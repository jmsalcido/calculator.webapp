import axios from "axios";
import authHeaders from "../../app/network/authHeaders";

const API_URL = "http://localhost:8080/"

export async function getRecords(serviceType, page, size) {
  const response = await axios.get(API_URL + "v1/records/", 
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

export async function getUserRecords(serviceType, page, size) {
  const response = await axios.get(API_URL + "v1/records/user",
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

export async function deleteRecord(recordId) {
  const response = await axios.delete(API_URL + "v1/records/delete/" + recordId,
  {
    headers: authHeaders()
  });

  return response.data;
}

export async function updateRecord(record) {
  const response = await axios.put(API_URL + "v1/records/update/",
  {
    id: record.id,
    uuid: record.uuid,
    serviceId: record.serviceId ? record.serviceId : record.service.id,
    userId: record.userId ? record.userId : record.user.id,
    cost: record.cost,
    userBalance: record.userBalance,
    serviceResponse: record.serviceResponse,
    date: record.date,
  },
  {
    headers: authHeaders()
  });

  return response.data;
}