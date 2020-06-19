import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getAuthorization = () => {
  return axios.get(
    `https://slack.com/oauth/v2/authorize?scope=incoming-webhook,commands&client_id=${process.env.REACT_APP_CLIENT_ID}`
  );
};

export { getAuthorization };
