import config from "../../config/config";
import mongoose from "mongoose";

const URI = config.mongo_uri

mongoose.connect(URI)
    .then(() => console.log(`Conected to DB`))
    .catch(error => console.log(error))