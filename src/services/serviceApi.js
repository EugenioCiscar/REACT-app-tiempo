const api_weather = "http://api.openweathermap.org/data/2.5/weather?q=Valencia,es&appid=8895171b0bad414dce1a1078df9458bb";

class ServiceApi {

  static async getData(){
       let result = await fetch (api_weather)
           .then(data=> data.json())
           .then(weather_data => weather_data);

       return result

   }

}

export default ServiceApi;
