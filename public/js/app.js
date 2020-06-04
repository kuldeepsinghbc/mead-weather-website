const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From Javascript';

weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  fetch('/weather?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        const demo = JSON.stringify(data.forecast);
        // messageTwo.textContent = demo;
        const { description, temperature, feelslike } = data.forecast;
        messageTwo.textContent = `${description} It is ${temperature} degrees Celcius, with a ${feelslike} % chance of rain.`;
        console.log(data.forecast);
        // messageTwo.textContent = data.forecast;
      }
      console.log(data);
    });
  });
});
// fetch('http://puzzle.mead.io/puzzle').then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });
