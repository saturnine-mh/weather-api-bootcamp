document.querySelector('button').addEventListener('click', getWeather)






function getWeather(){

let country = document.querySelector('#country').value
let state = document.querySelector('#state').value
let city = document.querySelector('#city').value


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=4f692eb2ad6ddc588ffdf69caca9c049`)
    .then(res => res.json())      // converts response into JSON
    .then(data => {
        let kelvinTemp = data.main.temp
        console.log(data, data.main.temp,Math.floor((kelvinTemp - 273.15) * 9/5 + 32))
        
        
        // console.log(data.currentConditions.temp)
        document.querySelector('h2').innerText = data.name + ': ' + 'Temp = ' +  Math.floor((kelvinTemp - 273.15) * 9/5 + 32)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

// ${city},${state},${country
