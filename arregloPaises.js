var countries = [];

function cargarPaises() {
  var xhttp = new XMLHttpRequest();
  var nombrePais = document.getElementById('txtPais').value;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      countries = JSON.parse(this.responseText);
      mostrarPaises();
    }
  };
  xhttp.open('GET', `https://restcountries.com/v3.1/name/${nombrePais}`, true);
  xhttp.send();
}

function mostrarPaises() {
  var tabla = document.getElementById('miTabla');
  var filas = '';
  for (var i = 0; i < countries.length; i++) {
    filas += `<tr>
      <td>${countries[i].name.official}</td>
      <td>${countries[i].population}</td>
      <td> <img src="${countries[i].flags.png}" class="img-thumbnail"></img></td>
    </tr>`;
  }
  tabla.innerHTML = filas;
}
