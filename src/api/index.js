import axios from '@/utils/axios.js'
export const test = () => {
    return axios.get('/index/test').then(res => {
        return res
    })
}