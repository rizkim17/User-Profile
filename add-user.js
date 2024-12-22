const { json } = require("body-parser");
const { response } = require("express");

fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Agus",
    email: "agussedih@gmail.com",
    phone: "081288889999",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
