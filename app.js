// ------------------------------------------------------
// Studio Ghibli Film Database
// ------------------------------------------------------

// testing to get data

const getGhibliData = () => {

		const apiCall = `https://ghibliapi.herokuapp.com/films`;
	
		fetch(apiCall)
			.then(response => response.json())
			.then(data => {
				console.log(data)
	;})
	};

	
getGhibliData()

// testing to loop data

// const loopData = () => {

// 	let apiCall = `https://ghibliapi.herokuapp.com/films`;

// 	fetch(apiCall)
// 		.then(response => response.json())
// 		.then(data => {
// 			for(let i = 0; i < data.length; i++) {
// 				let obj = data[i];
			
// 				console.log(obj.title);
// 			}
			
// ;})
// };

// loopData()



// ------------------------------------------------------

// function to loop each movie and create an element for each

const loopData = () => {

	let apiCall = `https://ghibliapi.herokuapp.com/films`;
  
	fetch(apiCall)
	  .then(response => response.json())
	  .then(data => {
		data.forEach(film => {
		  // calling createElement that takes data and id of element in which data will append. For each film, create an element.
		  createElement(film, "#main");
		})
	  })
  };
  
  loopData()

// in each created element, data is rendered for each film

  function createElement(data, id) {
	const film = document.querySelector(id);
	let filmCard = `<div class="card">

	<h2>${data.title} (${data.release_date})</h2>
	<h3>${data.original_title} (${data.original_title_romanised})</h3>

	<img class="poster" src="${data.image}"/>
	<p class="description">${data.description}</p>
	<p><img class="banner" src="${data.movie_banner}"></p>
	</div>`;
	film.innerHTML += filmCard;
  }