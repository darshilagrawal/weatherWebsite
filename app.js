const express=require("express");
const app=express();
const https=require("https");

app.get("/",function(req,res){
  const url="https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&units=metric&appid=a30590daaa47f386ccf4aa437a9208ac";
  https.get(url,function(response){

    // const weatherIcon=weatherData.weather[0].icon;

  response.on("data",function(data){
    const weatherData=JSON.parse(data);
    const temp=weatherData.main.temp;
    const weatherDescription=weatherData.weather[0].description;
    const weatherIcon=weatherData.weather[0].icon;

    res.write("<h1>The Current Temperature in Ahmedabad is "+temp+" degrees Celsius</h1>");
    res.write("<h1>The Weather Condition in Ahmedabad is "+weatherDescription+  "</h1>");
    res.write("<img src=https://openweathermap.org/img/wn/"+weatherIcon+ "@2x.png> ");
    res.end();
        })
      });
})

app.listen(3000,function(){
  console.log("Server Up and Running");
})
