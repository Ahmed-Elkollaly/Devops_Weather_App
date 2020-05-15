const request = require("request");


const geocode = (address,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?limit=10&access_token=pk.eyJ1IjoiYWhtZWQtZWxrb2xsYWx5IiwiYSI6ImNrNjExOHdpdTBjejEzZm54MXp6MXNxNmoifQ.C587DnFs8lKAihGbJchulQ'
    request({url  ,json:true},(error,{body}) => {

        const  {features} = body
        if(error){

            callback('Unable to connect to Geocode Service',undefined)


        }else if( features.length === 0) {
            callback('Location not found, try another location',undefined)
        }else {

            const feature = features[0]
            
            const { center,place_name } = feature

            callback(undefined,{
                lat : center[1],
                long : center[0],
                place_name : place_name
            })


        }



    })



}

module.exports = geocode