import axios from "axios";

const api = "https://api-gyz3zp6z7q-uc.a.run.app/api/benchmarks/metrics";
const token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmY2Y0MTMyMjQ3NjUxNTZiNDg3NjhhNDJmYWMwNjQ5NmEzMGZmNWEiLCJ0eXAiOiJKV1QifQ";

class DataService {
  getSampleData = () => {
    return axios
      .get(`${api}`, { headers: { Authorization: token } })
      .then((res) => res)
      .catch((error) => console.log(error));
  };
}

export default new DataService();