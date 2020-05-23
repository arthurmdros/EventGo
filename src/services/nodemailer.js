import axios from 'axios';

const nodemailer = axios.create({
    baseURL: 'http://192.168.1.10:3002'
});

export default nodemailer;