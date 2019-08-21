import axios from "axios";

export default {
    // Gets all books
    getItems: function () {
        return axios.get("/api/items").then(results => results.data);
    },
    // Gets the book with the given id
    getItem: function (itemName) {
        return axios.get("/api/items/" + itemName).then(results => results.data);
    },

    loginUser: function (newUser) {
        return axios.post("/api/login/", newUser).then(results => results.data);
    },

    signUpUser: function (newUser) {
        return axios.post("/api/signup/", newUser).then(results => results.data);
    }
};
