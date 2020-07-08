import Axios from 'axios';
const instance = Axios.create({
	baseURL: 'https://zauba-ecomm.firebaseio.com/userInfo.json'
});

export default instance;