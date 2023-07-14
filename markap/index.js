function createFormElements(cityOptions) {
  const formContainer = document.createElement('div');
  const title = document.createElement('h1');
  const form = document.createElement('form');
  const labelFirstName = document.createElement('label');
  const inputFirstName = document.createElement('input');
  const labelLastName = document.createElement('label');
  const inputLastName = document.createElement('input');
  const labelBirthDate = document.createElement('label');
  const inputBirthDate = document.createElement('input');
  const labelGender = document.createElement('label');
  const inputGender = document.createElement('input');
  const radioContainer = document.createElement('div');
  const labelMale = document.createElement('label');
  const inputMale = document.createElement('input');
  const labelFemale = document.createElement('label');
  const labelCity = document.createElement('label');
  const selectCity = document.createElement('select');
  const labelAddress = document.createElement('label');
  const textareaAddress = document.createElement('textarea');
  const labelLanguages = document.createElement('label');
  const languagesContainer = document.createElement('div');
  const checkboxEnglish = document.createElement('input');
  const labelEnglish = document.createElement('label');
  const checkboxSpanish = document.createElement('input');
  const labelSpanish = document.createElement('label');
  const checkboxFrench = document.createElement('input');
  const labelFrench = document.createElement('label');
  const submitButton = document.createElement('button');

  formContainer.id = 'registration-form';
  form.id = 'form';
  inputFirstName.id = 'firstName';
  inputLastName.id = 'lastName';
  inputBirthDate.id = 'birthdate';
  inputGender.id = 'male';
  inputMale.id = 'female';
  selectCity.id = 'city';
  textareaAddress.id = 'address';
  checkboxEnglish.id = 'english';
  checkboxSpanish.id = 'spanish';
  checkboxFrench.id = 'french';

  radioContainer.classList.add('radio-container');
  languagesContainer.classList.add('languages-container');

  inputFirstName.type = 'text';
  inputLastName.type = 'text';
  inputBirthDate.type = 'text';
  inputGender.type = 'radio';
  inputGender.name = 'gender';
  inputGender.value = 'Male';
  inputMale.type = 'radio';
  inputMale.name = 'gender';
  inputMale.value = 'Female';
  textareaAddress.rows = '4';

  inputFirstName.required = true;
  inputLastName.required = true;
  inputBirthDate.required = true;
  inputGender.required = true;
  inputMale.required = true;
  textareaAddress.required = true;

  title.innerText = 'Registration Form';
  labelFirstName.textContent = 'First Name:';
  labelLastName.textContent = 'Last Name:';
  labelBirthDate.textContent = 'Date of Birth:';
  labelGender.textContent = 'Gender:';
  labelMale.textContent = 'Male';
  labelFemale.textContent = 'Female';
  labelCity.textContent = 'City:';
  labelAddress.textContent = 'Address:';
  labelLanguages.textContent = 'Languages:';
  labelEnglish.textContent = 'English';
  labelSpanish.textContent = 'Spanish';
  labelFrench.textContent = 'French';
  submitButton.textContent = 'Save';

  labelFirstName.setAttribute('for', 'firstName');
  labelLastName.setAttribute('for', 'lastName');
  labelBirthDate.setAttribute('for', 'birthdate');
  labelGender.setAttribute('for', 'gender');
  labelMale.setAttribute('for', 'male');
  labelFemale.setAttribute('for', 'female');
  labelCity.setAttribute('for', 'city');
  labelAddress.setAttribute('for', 'address');
  labelLanguages.setAttribute('for', 'languages');

  cityOptions.forEach(cityName => {
    const option = document.createElement('option');
    option.value = cityName;
    option.textContent = cityName;
    selectCity.appendChild(option);
  });

  checkboxEnglish.type = 'checkbox';
  checkboxEnglish.name = 'languages';
  checkboxEnglish.value = 'English';
  checkboxSpanish.type = 'checkbox';
  checkboxSpanish.name = 'languages';
  checkboxSpanish.value = 'Spanish';
  checkboxFrench.type = 'checkbox';
  checkboxFrench.name = 'languages';
  checkboxFrench.value = 'French';

  form.appendChild(labelFirstName);
  form.appendChild(inputFirstName);
  form.appendChild(labelLastName);
  form.appendChild(inputLastName);
  form.appendChild(labelBirthDate);
  form.appendChild(inputBirthDate);
  form.appendChild(labelGender);
  form.appendChild(radioContainer);
  radioContainer.appendChild(inputGender);
  radioContainer.appendChild(labelMale);
  radioContainer.appendChild(inputMale);
  radioContainer.appendChild(labelFemale);
  form.appendChild(labelCity);
  form.appendChild(selectCity);
  form.appendChild(labelAddress);
  form.appendChild(textareaAddress);
  form.appendChild(labelLanguages);
  form.appendChild(languagesContainer);
  languagesContainer.appendChild(checkboxEnglish);
  languagesContainer.appendChild(labelEnglish);
  languagesContainer.appendChild(checkboxSpanish);
  languagesContainer.appendChild(labelSpanish);
  languagesContainer.appendChild(checkboxFrench);
  languagesContainer.appendChild(labelFrench);
  form.appendChild(submitButton);

  formContainer.appendChild(title);
  formContainer.appendChild(form);

  return formContainer;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formContainer = document.getElementById('registration-form');
  const table = document.getElementById('dataTable');
  formContainer.style.display = 'none';
  table.style.display = 'table';

  const inputFirstName = document.getElementById('firstName');
  const inputLastName = document.getElementById('lastName');
  const inputBirthDate = document.getElementById('birthdate');
  const inputGender = document.getElementById('male');
  const inputMale = document.getElementById('female');
  const selectCity = document.getElementById('city');
  const textareaAddress = document.getElementById('address');
  const checkboxEnglish = document.getElementById('english');
  const checkboxSpanish = document.getElementById('spanish');
  const checkboxFrench = document.getElementById('french');

  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const birthDate = inputBirthDate.value;
  const gender = inputGender.checked ? inputGender.value : inputMale.value;
  const selectedCity = selectCity.value;
  const address = textareaAddress.value;
  const languages = [];
  if (checkboxEnglish.checked) {
    languages.push(checkboxEnglish.value);
  }
  if (checkboxSpanish.checked) {
    languages.push(checkboxSpanish.value);
  }
  if (checkboxFrench.checked) {
    languages.push(checkboxFrench.value);
  }

  const tbody = document.getElementById('tableBody');
  const newRow = tbody.insertRow();

  const cellFirstName = newRow.insertCell();
  cellFirstName.textContent = firstName;

  const cellLastName = newRow.insertCell();
  cellLastName.textContent = lastName;

  const cellBirthDate = newRow.insertCell();
  cellBirthDate.textContent = birthDate;

  const cellGender = newRow.insertCell();
  cellGender.textContent = gender;

  const cellCity = newRow.insertCell();
  cellCity.textContent = selectedCity;

  const cellAddress = newRow.insertCell();
  cellAddress.textContent = address;

  const cellLanguages = newRow.insertCell();
  cellLanguages.textContent = languages.join(', ');

  document.getElementById('form').reset();
}

(function () {
  const cityOptions = ['New York', 'Kiyv', 'London', 'Tokyo', 'Sydney'];
  const container = document.createElement('div');
  container.id = 'main';

  const table = document.createElement('table');
  table.id = 'dataTable';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['First Name', 'Last Name', 'Date of Birth', 'Gender', 'City', 'Address', 'Languages'];
  headers.forEach(headerText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  thead.appendChild(headerRow);

  const tbody = document.createElement('tbody');
  tbody.id = 'tableBody';

  table.appendChild(thead);
  table.appendChild(tbody);

  container.appendChild(table);

  const formContainer = createFormElements(cityOptions);
  container.appendChild(formContainer);

  document.body.appendChild(container);

  const form = document.getElementById('form');
  form.addEventListener('submit', handleFormSubmit);
})();