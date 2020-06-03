const request = require('request');
const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=4175e214cbcb79845dee879b6fa075e7&query=' +
    encodeURIComponent(latitude) +
    ',' +
    encodeURIComponent(longitude) +
    '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        // ` ${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip} % chance of rain.`
        // {
        //   forcast:
        //     body.current.weather_descriptions[0] +
        //     ' It is currently ' +
        //     body.current.temperature +
        //     ' It feelslike' +
        //     body.current.feelslike,
        // }
        {
          description: body.current.weather_descriptions[0],
          temperature: body.current.temperature,
          feelslike: body.current.feelslike,
        }
      );
    }
  });
};
module.exports = forecast;
