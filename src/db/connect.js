const db = require("mongoose")
const dotenv = require("dotenv")
const rhumModel = require("../model/rhum")

dotenv.config()

db.connect(process.env.MONGO_URI);

const Rhum = db.model("rhum", rhumModel, 'rhums');

const getRhumList = async () => {
    console.log("Getting Rhums from mongodb");
    const rhums = await Rhum.find();
    return rhums;
}

module.exports = {
    getRhumsList
}