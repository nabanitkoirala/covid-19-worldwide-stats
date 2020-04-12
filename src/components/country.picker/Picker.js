import React,{ useState, useEffect } from 'react';
import { NativeSelect,FormControl } from '@material-ui/core';
import styles from './Picker.module.css';
import { fetchCountries } from './../../api/httpRequest';
const Picker=({ handleCountryChange })=>{
    const [fetchedCountries, setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

    return(
        <div className={styles.form}>
            <p className={styles.stats}>Choose a country for COVID-19 Info</p> 
    <FormControl className={styles.formcontrol}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="global">Global</option>
    {fetchedCountries.map((country,i)=><option key ={i} value={country}>{country}</option>)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        </NativeSelect>
    </FormControl>
        </div>
    )
}
    


export default Picker;