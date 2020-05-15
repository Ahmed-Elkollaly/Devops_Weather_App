const request = require("request");



const forecast = (lat,long,callback) => {

    const url = 'https://api.darksky.net/forecast/c977c4d591f6c1efd8caad560b96f6a2/'+encodeURIComponent(lat) + ',' + encodeURIComponent(long)
    request({url ,json:true},(error,{body}) => {

        if(error){

            callback('Cannot connect to forecast service',undefined)
        }else if (body.error) {

            callback('No location found with specified lat and long, try another location', undefined)

        }else {
            const { currently } = body
            const { temperature , summary} = currently
            callback(undefined,{
                temperature : temperature,
                summary : summary
            })

        }


    })
}


module.exports = forecast