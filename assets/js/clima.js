window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( posicion => {
            // console.log(posicion.coords.latitude)
            // console.log(posicion.coords.longitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=346eaf756ea45ecf3807540f35f62625&units=metric`

            // console.log(url)

            fetch(url)
                .then ( response => { return response.json() })
                .then ( data => {
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()
                    ubicacion.textContent = data.name
                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    switch(data.weather[0].main){
                        case 'Clear':
                        iconoAnimado.src = 'assets/img/weather/day.svg'
                        console.log('LIMPIO')
                        break;
                        case 'Thunderstorm':
                        iconoAnimado.src = 'assets/img/weather/thunder.svg'
                        console.log('TORMENTA')
                        break;
                        case 'Drizzle':
                        iconoAnimado.src = 'assets/img/weather/rainy-2.svg'
                        console.log('LLOVIZNA')
                        break;
                        case 'Rain':
                        iconoAnimado.src = 'assets/img/weather/rain-7.svg'
                        console.log('LLUVIA')
                        break;
                        case 'Snow':
                        iconoAnimado.src = 'assets/img/weather/snowy-6.svg'
                        console.log('NIEVE')
                        break;
                        case 'Atnosphere':
                        iconoAnimado.src = 'assets/img/weather/weather.svg'
                        console.log('ATMOSFERA')
                        break;
                        case 'Clouds':
                        iconoAnimado.src = 'assets/img/weather/cloudy-day-1.svg'
                        console.log('NUBES')
                        break;
                    }

                })
                .catch ( error => {
                    console.log(error)
                })

        })
        
    }
})