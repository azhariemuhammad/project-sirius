const axios = require('axios')




const getPhoto = (req, res) => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=ULtXwM7iAjNU8wX4EeEyII970BuYKeJX166vSo0J')
  .then(function (response) {
    console.log(response);
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}


const getPosition = (req, res) => {

  axios.get(`http://api.open-notify.org/iss-now.json?callback=CALLBACK`)
  .then(function (response) {
    console.log('hello');
    let foo = response
    console.log(foo.data, 'inini');
    res.status(200).send(foo.data)
  })
  .catch(function (error) {
    console.log(error);
  })
}



module.exports = {
  getPhoto,
  getPosition,
  
};
