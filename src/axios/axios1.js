import Axios from 'axios';
const instance = Axios.create({
	baseURL: 'https://zauba-ecomm.firebaseio.com/campaign.json'
});

export default instance;