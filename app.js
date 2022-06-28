window.addEventListener('load' , ()=> {

    let lat
    let lon

    let valorTemp = document.getElementById('valorTemp')
    let descTemp = document.getElementById('descTemp')

    let ubicacion = document.getElementById('ubicacion')
    let icono = document.getElementById('iconoAnimado')

    let velocViento = document.getElementById('velocViento')


    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(posicion => {
            
            lat = posicion.coords.latitude
            lon = posicion.coords.longitude
            
            const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={3152b6ba37672decf7a09709e96e29c2}`

            console.log(url)

            fetch(url)
                .then( response => {return response.json})
                .then( data => {
                    console.log(data) 
                    
                })
                .catch( error => {
                    console.log(error) 
                })
        })
    }


})