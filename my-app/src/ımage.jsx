// import City from "./City";
// import {useEffect, useState} from "react";
// import './input.css'


// const updateWeatherImage = (data) => {


// const [newImage,setFoto] = useState();

// useEffect(() => {
//     async function getImg() {
//       try {
//     const iconUrl = `http:openweathermap.org/img/wn/${City.weather[0].icon}.png`;        
//         console.log(iconUrl);
//         setFoto(iconUrl.data)
//       } catch (error) {
//         console.error("bg-[url('/src/images/404.jpg')]");
//       }
//     }
//     getImg();
//   },[]);//her render edildiğinde bu verinin değişmesi için
  
  





//      const weatherMain = data.weather[0].main;
//      let newImage = "/images/default.png";

//      switch (weatherMain) {
//        case "Clear":
//          newImage = "/images/clear.png";
//          break;
//        case "Rain":
//          newImage = "/images/rain.png";
//          break;
//        case "Snow":
//          newImage = "/images/snow.png";
//          break;
//        case "Clouds":
//          newImage = "/images/cloud.png";
//          break;
//        case "Mist":
//          newImage = "/images/mist.png";
//          break;
//        case "Haze":
//          newImage = "/images/haze.png";
//          break;
//         //Diğer hava durumları için de gerekli durumları ekleyebilirsiniz.
//      }

//      setFoto(newImage);
//    };
