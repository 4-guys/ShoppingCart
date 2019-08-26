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

    getRandom: function() {
        return axios.get("/api/items/").then(
            function(results){
                for (var i =0; i < results.length;i++){
                   i = Math.floor(Math.random()* results.length + 1);
                    console.log(results[i].data)
                } return results[i].data
            }
        )
    },

    loginUser: function (newUser) {
        sessionStorage.setItem("login", "true")

        return axios.post("/api/login/", newUser).then(results => results.data)
    },
    logoutUser: function (newUser) {
        sessionStorage.clear()

        return axios.post("/api/logout/", newUser).then(results => results.data)
    },


    signUpUser: function (newUser) {
        return axios.post("/api/signup/", newUser).then(results => results.data);
    }
};
