$(document).ready(() => {
  $('INPUT#btn_translate').click(() => {
    const langCode = $('INPUT#language_code').val();
    const url = 'https://stefanbohacek.com/hellosalut/?lang=' + langCode;

    $.get(url, (result) => {
      $('DIV#hello').html(result.hello);
    });
  });
});
