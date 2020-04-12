import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{
    let changeableUrl=url;
    if (country){
        changeableUrl=`${url}/countries/${country}`
    }

    try {
        const {data:{ confirmed,recovered,deaths,lastUpdate }}=await axios.get(changeableUrl);
        const response={
            confirm:confirmed,
            recover:recovered,
            dead:deaths,
            update:lastUpdate
        }
        
        return response;
        
    }
    catch (error) {

    }

}


export const fetchNepal=async()=>{
    try{
        const {data:{ confirmed, deaths, recovered, lastUpdate }}=await axios.get(`${url}/countries/nepal`);
        const nepal={
            confirm:confirmed,
            recover:recovered,
            dead:deaths,
            update:lastUpdate
        }
        
    return nepal;
        }
    catch(error){

    }
}


export const fetchCountries=async()=>{
    try{
        const {data:{ countries }}=await axios.get(`${url}/countries`);    
        return countries.map((country)=>country.name); 
    }
    catch(error){

    }
}