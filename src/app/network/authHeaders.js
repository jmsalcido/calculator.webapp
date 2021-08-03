export default function authHeaders() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.accessToken) {
      return { "X-Auth-Token": user.accessToken };
    } else {
      return {};
    }
  }
  