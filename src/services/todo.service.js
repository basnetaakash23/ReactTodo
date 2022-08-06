import http from "../http-common";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080";
class ToDoDataService {
  getAll() {
    return http.get(API_URL+"/todos/", {headers:authHeader() });
  }
  create(data) {
    return http.post(API_URL+"/todos/", data,{headers:authHeader() } );
  }
}
export default new ToDoDataService();