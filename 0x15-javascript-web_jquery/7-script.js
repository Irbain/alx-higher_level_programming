$.ajax({
  url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
  success: (result) => {
    $('DIV#character').html(result.name);
  }
});
