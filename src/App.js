import React, { Component } from 'react';
import Cards from './components/cards/Cards';
import Country from './components/country/Country';
import styles from './App.module.css';
import { fetchData } from './api/httpRequest';
import { fetchNepal } from './api/httpRequest';
import Picker from './components/country.picker/Picker';
 
export class App extends Component {
  constructor(){
    super();
    this.state={
      data:'',
      datas:'',
      country:''
    }
  }
async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({
    data:fetchedData
  })

  const load=await fetchNepal();   
  this.setState({
    datas:load
  })
}
handleCountryChange= async(country)=>{
  const fetchedData = await fetchData(country);
  this.setState({ data:fetchedData, country:country })
}



  render() {
    const{ data,datas } =this.state;
    return (
      <div className={styles.container}>
        <div className="row">
        <Cards data={data}/><br />
        <Picker className={styles.picker} handleCountryChange={this.handleCountryChange}/>
        <Country className="country" data={datas}/>
        </div>
      </div>
    )
  }
}
