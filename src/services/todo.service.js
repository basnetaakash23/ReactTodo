
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080";
class ToDoDataService {
  getAll() {
    return axios.get(API_URL+"/todos/", {headers:authHeader() });
  }
  create(data) {
    return axios.post(API_URL+"/todos/", data,{headers:authHeader() } );
  }
}
export default new ToDoDataService();