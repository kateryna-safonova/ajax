let btnGetData = document.getElementById("get-data");

const getData = () => {
  fetch(
    'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'
  )
    .then((res) => res.json())
    .then((data) => {
      let divImie = document.createElement('div')
      let divNazwisko = document.createElement('div');
      let divZawod = document.createElement('div');
      let divFirma = document.createElement('div');
      let hr = document.createElement('hr')

      divImie.innerText = `Imie: ${data.imie}`;
      divNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
      divZawod.innerText = `Zawod: ${data.zawod}`;
      divFirma.innerText = `Firma: ${data.firma}`;

      document.body.appendChild(divImie);
      document.body.appendChild(divNazwisko);
      document.body.appendChild(divZawod);
      document.body.appendChild(divFirma);
      document.body.appendChild(hr)
    })
    .catch((error) => {
      console.error(error);
    });
};
btnGetData.addEventListener('click', getData);

// $(document).ready(function () {
//   // let conteiner = $("<div>", {id: "dane-programisty"})
//   let conteiner = $('<div id="dane-programisty">')
//   console.log(conteiner);
//   $("#get-data").click(function () { 
//     console.log('click');
//     $.getJSON(
//       "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
//     )
//       .done(function (data) {
//         let divImie = $('<div class="div"></div>').text(`Imie: ${data.imie}Nazwisko: ${data.nazwisko}`);
//         let divNazwisko = $("<div></div>").text(`Nazwisko: ${data.nazwisko}`);
//         let divZawod = $("<div></div>").text(`Zawod: ${data.zawod}`);
//         let divFirma = $("<div></div>").text(`Firma: ${data.firma}`);


//         let jqBody = $("body");
//         jqBody.append(divImie);
//         jqBody.append(divNazwisko);
//         jqBody.append(divZawod);
//         jqBody.append(divFirma);
//         jqBody.append(hr)
//       })
//       .fail(function (error) {
//         console.error(error);
//       });
//   });
// });
