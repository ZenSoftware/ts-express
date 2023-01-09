const resultPane = document.querySelector('#result-pane');
const primeInput = document.querySelector('#prime-input');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  fetch(`http://localhost:3000/${primeInput.value}`)
    .then(response => response.json())
    .then(data => {
      resultPane.innerHTML = JSON.stringify(data, null, 2);
    });
});
