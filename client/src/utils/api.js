import axios from "axios";

export default {
    newUser: (userData) => {
        return axios.post("/api/users/new", {userData: userData});
    }
}