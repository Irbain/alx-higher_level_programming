t request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
	  if (error) {
		      console.error('Error:', error);
		    } else if (response.statusCode !== 200) {
			        console.error('Unexpected status code:', response.statusCode);
			      } else {
				          const film = JSON.parse(body);
				          const charactersUrls = film.characters;
				          charactersUrls.forEach((characterUrl) => {
						        request(characterUrl, (charError, charResponse, charBody) => {
								        if (charError) {
										          console.error('Error fetching character:', charError);
										        } else if (charResponse.statusCode !== 200) {
												          console.error('Unexpected status code:', charResponse.statusCode);
												        } else {
														          const character = JSON.parse(charBody);
														          console.log(character.name);
														        }
								      });
						      });
				        }
});

