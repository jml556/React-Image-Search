import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID gB643b-X26TFNkCRaLf6cU1OzVm2If_nL3ibPwWB3As'
    }
})