import axios from 'axios'

// opciones API para los PUESTOS ########################################
export const getData = async () => {
  try {
      const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization")
      return res.data 
  } catch (err) {
      alert('Ocurrió un error ⚠');
  }
};

export const postData = async (data) => {
  console.log(data)
  const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
      data: data
  }
  try {
      const res = await axios(configRequest)
      return res.data
  } catch (err) {
     return (console.log('error'));
      
      
  }
};

export const deleteData = async (id) => {
  console.log(id+"api")
  const configRequest = {
      method: 'DELETE',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs/'+id,
      
  }
  try {
      const res = await axios(configRequest)
      return res.data
  } catch (err) {
     return(console.log('error'))
      
  }
};

// opciones API para Paises #####################################
export const getPais = async () => {
  try {
      const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
      return res.data 
  } catch (err) {
      alert('Ocurrió un error ⚠');
  }
};

export const postPais = async (countrie) => {
  const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
      data: {name: countrie}
  }
  try {
      const res = await axios(configRequest)
      return res.data
  } catch (err) {
      alert('Ocurrió un error ⚠');
      
  }
};  


// opciones API para ciudad ################################## 

export const getCiudad = async () => {
  try {
      const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
      return res.data 
  } catch (err) {
      alert('Ocurrió un error ⚠');
  }
};

export const postCiudad = async (data) => {
  const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/places/',
      data:  data,
      headers: {
        "Content-Type": "application/json"
    }
  }
  try {
      const res = await axios(configRequest)
      return res.data
  } catch (err) {
      alert('Ocurrió un error ⚠');
      
  }
};


// opciones API para Empresa ###############################
export const postEmpresa = async (data) => {
  const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/organizations',
      data: data
  }
  try {
      const res = await axios(configRequest)
      return res.data
  } catch (err) {
      alert('Ocurrió un error ⚠');
      
  }
};

export const getEmpresaCiudad = async () => {
  try {
      const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations/?_expand=place")
      return res.data 
  } catch (err) {
      alert('Ocurrió un error ⚠');
  }
};

export const getEmpresa = async () => {
  try {
      const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations")
      return res.data 
  } catch (err) {
      alert('Ocurrió un error ⚠');
  }
}
  
  