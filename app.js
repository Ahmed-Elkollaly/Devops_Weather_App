const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const express = require('express')

const port = process.env.port | 3000
const app = express()


app.use(express.json())

app.post('/weather',(req,res) => {

    geocode(req.body.address,(error,{lat,long,place_name}) => {


        if (error) {  return res.status(502).send() }
 
        forecast(lat,long,(error,{temperature,summary}) => {
    
            if (error) { return console.log('Error : ' + error) }
                
                    
                const response = {
                    place_name,
                    temperature,
                    summary
                }
                res.send(response)
            
            
        })
        
    })
  


})

app.listen(port,() => {

    console.log('Server is listening on port : ' + port )
})
