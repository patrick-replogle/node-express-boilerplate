const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "user1",
      first_name: "Patrick",
      last_name: "Replogle",
      email: "fakeuser1@gmail.com",
      password: bcrypt.hashSync("password", 10),
      admin: true
    },
    {
      username: "user2",
      first_name: "Carina",
      last_name: "Gonzalez",
      email: "fakeuser2@gmail.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    }
  ]);
};
