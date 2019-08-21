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

    signUpUser: function () {
        return axios.post("/api/users/").then(results => results.data);
    }
};
