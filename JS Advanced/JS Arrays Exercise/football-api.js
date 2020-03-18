const url = "https://api-football-v1.p.rapidapi.com/v2/predictions/157462";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "4647dae471mshba2a7fa64dde9abp117a98jsnf184cf64a1da"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });