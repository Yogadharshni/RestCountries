
 fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    data.forEach(element => {
        datas(element.name.common,
          element.flags.png,
          element.capital,
          element.region,
          element.population,
          element.latlng[0],
          element.latlng[1]
          )      
    });
})
.catch((err)=>console.log(err))

function datas(name,flag,capital,region,population,latitude,longitude){
 document.body.innerHTML +=`
 <div class="card">
   <img class="flag" src='${flag}' alt='${name}'></img>
   <div class="card-details">
   <h5 class='card-title'><span><I>${name} </I> </h5>
   <p class="card-text"><span>Capital :</span> ${capital}</p>
   <p class="card-text"><span>Region :</span> ${region}</p>
   <p class="card-text"><span>Population :</span> ${population}</p>
   <a href="#" class="btn btn-primary" id= 'btn' onclick=(values(${latitude},${longitude},${name})) >Click for Weather </a>
   <div id=${name}></div>
      
   </div> 
   </div> 
 `
}   


 function values(lat,lng,name){
  var WeatherAPI =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3d84a30bb6e40497f0716aef9110d81b`
  console.log(name)
  fetch(WeatherAPI)
.then((res) => res.json())
.then((data)=> {
  alert (` 
  For ${name.id}  
   Current Humidity is ${data.main.humidity}
   Current Pressure is ${data.main.pressure}
   Current Temperature is ${data.main.temp}`)
   })
  }

  document.addEventListener("click",(event) => event.preventDefault())
