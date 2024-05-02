$.ajax({
  url: 'https://swapi-api.hbtn.io/api/films/?format=json',
  success: (result) => {
    const obj = result.results;
    for (let i = 0; i < result.count; i++) {
      $('UL#list_movies').append('<li>' + obj[i].title + '</li>');
    }
  }
});
