import axios from "axios";
import authHeaders from "../../app/network/authHeaders";
import API_URL from "../../app/network/api";

export async function submitOperation(body) {
    try {
        const response = await axios.post(API_URL + "v1/services/", body, 
        {
            headers: authHeaders() 
        });

        return response;
    } catch (err) {
        return err.response;
    }
}