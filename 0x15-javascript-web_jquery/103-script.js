function fetchAndPrint () {
  const langCode = $('INPUT#language_code').val();
  const url = 'https://stefanbohacek.com/hellosalut/?lang=' + langCode;

  $.get(url, (result) => {
    $('DIV#hello').html(result.hello);
  });
}

$(document).ready(() => {
  $('INPUT#btn_translate').click(() => {
    fetchAndPrint();
  });
  $('INPUT#language_code').keypress((e) => {
    const key = e.which;
    if (key === 13) { // the enter key code
      fetchAndPrint();
    }
  });
});
