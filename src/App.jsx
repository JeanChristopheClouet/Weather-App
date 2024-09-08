import { useState } from 'react'
import './App.css'


// The api gives access to whatever data OpenWeather is sharing
const api = {
  key: "299096eb1869fe99ca46c3b0cb536d7f",
  base : "https://api.openweathermap.org/data/2.5/"
  
}

function App() {

  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})

  


  // handle when the user clicks on the button
  const searchCity =()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((results) => {
        setWeather(results)
        console.log(results)
        setSearch("")
      })
    
    
  }

  const handleKeyPress =(e)=>{
    if(e.keyCode===13){

      searchCity()
    }
    
  }

  
  return (
    <main class="bg-dark container-fluid text-center">
    <body class="bg-dark main">

      
      <h1 class="text-center">
        JC's Weather App ☀️
      </h1>  
      <div>

        <div class="row" style={{marginTop:50}}>
          <div class="col-md-6">
            <input class=" form-control" onChange={(e)=>setSearch(e.target.value)} placeholder="type city name" value={search} onKeyDown={handleKeyPress}></input>

          </div>
          
          <div class="col-md-6">
            <button class="btn btn-info"onClick={searchCity}>YeeHaw <i class="fa fa-search"></i></button>

          </div>
        
        </div>
        
      </div>

      {typeof weather.main != "undefined"?

        <div class="row"style={{marginTop:50}}>
          <div class="col-md-2"><p className="element">🌍{weather.name}</p>
</div>
          <div class="col-md-2"> <p className="element">🌡️{weather.main.temp}°C </p></div>
         <div class="col-md-2">          <p className="element">💧Humidity {weather.main.humidity}%</p>
</div>

          <div class="col-md-2">          <p className="element grey-qo-regular" type="grey-qo-regular">{weather.weather[0].main}</p>
</div>

           <div class="col-md-2">          <p className="element"> Country : {weather.sys.country} <i class="fa fa-flag"></i></p>
          </div>

        
        </div>
      :
      ""
      }
     
    
    </body>
    <footer className="element text-center" style={{marginTop:646, marginBottom:5}}>Made by JC in 2024</footer>
    </main>
  )
}
export default App