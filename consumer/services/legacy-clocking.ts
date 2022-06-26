import axios, { Axios } from 'axios'

export const legacyClockingSend = async (data: any) => {
    const legacyApi: Axios = axios.create({
        baseURL: 'https://api.mockytonk.com/'
    });

    try {
        const initialTime = new Date()
        const response = await legacyApi.post('proxy/ab2198a3-cafd-49d5-8ace-baac64e72222', data);
        const finalTime = new Date()
        console.log(`legacy api received message: ${JSON.stringify(response.data)} in ${(finalTime.getTime() - initialTime.getTime())/1000} seconds`)
    } catch (err) {
        console.log(`error: ${err}`)
    }
}