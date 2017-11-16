
   $(document).ready(function () {
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=ULtXwM7iAjNU8wX4EeEyII970BuYKeJX166vSo0J`)
       .then(({data}) => {
         console.log(data);
         $('#getPhoto').append(
           `<p>${data.date}</p>
           <img src=${data.url} style="">
           <p>${data.explanation}</p>`
         )
       })
       .catch(function (error) {
         console.log(error);
       })
    })
