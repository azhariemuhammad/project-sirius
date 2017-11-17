
   $(document).ready(function () {
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=ULtXwM7iAjNU8wX4EeEyII970BuYKeJX166vSo0J`)
       .then(({data}) => {
         console.log(data);
         $('#getPhoto').append(
           `<p id="date">Created at: ${data.date}</p>
           <figure class="image is-256x256">
          <img src=${data.url}>
            </figure>


           <div class="photo">
           <p class="subtitle is-4">${data.explanation}</p>
           </div>`
         )
       })
       .catch(function (error) {
         console.log(error);
       })
    })

    // START FACEBOOK
    function logout(){
      localStorage.removeItem('token')
      window.location = "http://localhost:8080/login.html"
    }

    
