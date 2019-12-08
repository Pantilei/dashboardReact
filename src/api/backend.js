import axios from "axios";

//let token = localStorage.getItem('token');

export default axios.create({
  baseURL: "http://localhost:9000"
  //headers: {'Authorization': 'Bearer '+token}
});
