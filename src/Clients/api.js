import axios from 'axios'

export const postData = async (url, data) => {
    const configRequest = {
        method: 'POST',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/' + url ,
        data: data,
        headers: {
            "Content-Type": "application/json",
        }
    }
    try{
        const res = await axios(configRequest);
        return(res);
    }catch(err){
        return(console.log('Ocurrió un error al cargar los datos!!!'));
    }
}


export const postDataApi = async (url, data) => {
    const configRequest = {
        method: 'POST',
        url: 'https://apis.datos.gob.ar/georef/api/' + url ,
        data: data,
        headers: {
            "Content-Type": "application/json",
        }
    }
    try{
        const res = await axios(configRequest);
        return(res);
    }catch(err){
        return(console.log('Ocurrió un error al cargar los datos!!!'));
    }
}