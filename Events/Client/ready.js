const { Client, Activity } = require("discord.js")
const mongoose = require("mongoose");
const { Database } = require("../../config.json");
module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    execute(client) {
        console.log("Edwar is now online!");
        client.user.setActivity("Devloping", {type: "WATCHING"})

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Database Connection established!")
        }).catch((err) => {
            console.log(err)
        })
    }
}