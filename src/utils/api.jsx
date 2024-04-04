import axios from 'axios'

const url = 'http://localhost:8000';

export const getRelay = async ()=>{
    try {
        const result = await axios.get(`${url}/getRelay`);
        // console.log(result)
        return result;
    } catch (error) {
        console.log("error while getting relay")
    }
}
export const updateRelay = async (data)=>{
    try{
        // console.log("data",data.data.relayData.relay)
        const query={
            "relay":data
        }
        // console.log(query)
        await axios.put(`${url}/Updaterelay`,query);

    }catch(error){
        console.log('an error occured  api .js',error);
    }
}
export const getCaptureImage = async ()=>{
    try {
        const result = await axios.get(`${url}/getCaptureImage`);
        // console.log("api ",result)
        return result
    } catch (error) {
        console.log("error occured api js getcapture image", error)
    }
}
export const UpdateCaptureImage = async (data)=>{
    try{
        // console.log("data",data.data.relayData.relay)
        const query={
            "captureImage":data
        }
        // console.log(query)
        await axios.put(`${url}/UpdateCaptureImage`,query);

    }catch(error){
        console.log('an error occured  api .js',error);
    }
}
export const UpdateMorter = async (data)=>{
    try{
        // console.log("data",data.data.relayData.relay)
        const query={
            "morterStart":data
        }
        // console.log(query)
        await axios.put(`${url}/Updatestartmorter`,query);

    }catch(error){
        console.log('an error occured  api .js',error);
    }
}
export const getmorter = async ()=>{
    try{
        const res = await axios.get(`${url}/getmorter`);
        return res;

    }catch(error){
        console.log('an error occured  api .js',error);
    }
}
export const getImage = async ()=>{
    try{
        const res = await axios.get(`${url}/getImage`);
        return res;

    }catch(error){
        console.log('an error occured  api .js',error);
    }
}

export const getMoisture = async ()=>{
    try {
        const data = await axios.get(`${url}/getmoisture`);
        return data
    } catch (error) {
        console.log("error occured")
    }
}

export const getHumidity = async ()=>{
    try {
        const data = await axios.get(`${url}/gethumidity`)
        return data;
    } catch (error) {
        console.log("error occured")
    }
}
export const getTemp = async ()=>{
    try {
        const data = await axios.get(`${url}/gettemperature`)
        return data;
    } catch (error) {
        console.log("error occured")
    }
}