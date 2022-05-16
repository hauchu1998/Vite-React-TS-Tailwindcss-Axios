import axios, { AxiosResponse } from "axios";


axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credential'] = true;


export const getServerTokenApi = async () => {
    axios.get('/api/get_token')
    .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('auth_token', res.data.token);
    })
    .catch((err) => console.log(err))
}

export const AuthTestApi = async (data: any) => {
    await axios.post('/api/auth_test', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
    })
    .then(res => console.log('auth test', res.data))
    .catch(err => console.log(err))
}


