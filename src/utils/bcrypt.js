import bcrypt from 'bcrypt';
import config from "../config/config";

export const hashData = async (data) => {
    return bcrypt.hash(data, config.salt)
}

export const compareData = async (data) => {
    return bcrypt.compare(data, hashData)
}