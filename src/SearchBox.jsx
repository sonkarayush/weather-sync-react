import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./SearchBox.module.css"
import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';



const SearchBox = ({updateInfo}) => {

 const API="https://api.openweathermap.org/data/2.5/weather";
 const APIKey = import.meta.env.VITE_WEATHER_API_KEY;

  let [city, setCity]= useState("");
  let [loading, setLoading] = useState(false);
  
  function change(dets){
    setCity(dets.target.value);
  }

  function submit(dets){
    dets.preventDefault();
   // console.log(city);
    setCity("");
    weather();
  }

  async function weather(){
    try {
        setLoading(true);
    let info= await fetch(`${API}?q=${city}&appid=${APIKey}&units=metric`);
    let cleanInfo= await info.json();
     //console.log(cleanInfo);
    let finalRes={
      city: city,
      temp:cleanInfo.main.temp,
​      temp_min:cleanInfo.main.temp_max,
      humidity:cleanInfo.main.humidity,
      feels_like:cleanInfo.main.feels_like,
      weather:cleanInfo.weather[0].description
    }
    updateInfo(finalRes);
  }catch(error){
    console.error("Given city name does not exist");
  }finally {
        setLoading(false);
  }
}

 
  return (
    <div>
      <h1><u>Search For Weather</u></h1>
      <form onSubmit={submit}>
        <TextField id="outlined-basic" label="CITY NAME" variant="outlined" value={city} onChange={change} required  /><br></br><br></br>
        <Button  variant="contained" color="success" type="submit">SEARCH</Button>
      </form>
      {loading && <CircularProgress color="success" style={{ marginTop: "20px" }} />}
  
    </div>
  )
}

export default SearchBox;


