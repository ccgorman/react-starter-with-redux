import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-efb1b.firebaseio.com/'
});

export default instance;