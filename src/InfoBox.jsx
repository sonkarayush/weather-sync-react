import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from "./InfoBox.module.css"

const InfoBox = ({ info }) => {

const initial="https://skymetglobalweather.com/strapi_skymet/uploads/1200630_Do_Not_Edit_webp_forecast_Dec_22_4a00e6b9e8.webp";
 const Rain= "https://media.istockphoto.com/id/2183276741/photo/dark-overcast-sky-with-heavy-rain-and-lightning-intense-weather-phenomenon.jpg?s=612x612&w=0&k=20&c=RqTTHHbV5ffEbFWb4k-tQKo2poePybsESZKJfV5xNM4=";
 const Hot= "https://www.shutterstock.com/image-photo/orange-sky-sun-clouds-during-260nw-2475701091.jpg";
 const Cold= "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";

 let imgUrl = initial;

 if (!info.isInitial){
  if (info.temp > 15 && info.humidity > 80) {
    imgUrl = Rain;
  } else if (info.temp <= 15) {
    imgUrl = Cold;
  }else if (info.temp > 15) {
    imgUrl = Hot;
  } 
}
  return (
    <div>
      <div className={styles.Card}> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
        />
        <CardContent  sx={{  backgroundColor: 'rgba(175, 242, 247, 0.902)',  backdropFilter: 'blur(5px)', paddingBottom: '24px !important' }}>
          <Typography gutterBottom variant="h5" >
            <b>{info.city}</b>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}component="div" >
           <p><b>Temperature:</b> {info.temp}&deg;C</p>
                <p><b>Humidity:</b> {info.humidity}%</p>
                <p><b>Min Temp:</b> {info.temp_min}&deg;C</p>
                <p><b>Max Temp:</b> {info.temp_max}&deg;C</p>
                <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like <b>{info.feels_like}&deg;C</b></p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default InfoBox
