const form = document.getElementById("main-form");

//Check to verify that fields have both a name and a value before added.
const isValidElement = (element) => {
  return element.name && element.value;
};

//Check which radio element that is selected
const isValidValue = (element) => {
  return !["radio"].includes(element.type) || element.checked;
};

// Makes the format to a JSON object and displays it in the DOM.
// The reduce.call function is hard for me to understand
const formToJSON = (elements) =>
  [].reduce.call(
    elements,
    (data, element) => {
      if (isValidElement(element) && isValidValue(element)) {
        data[element.name] = element.value;
      }
      return data;
    },
    {}
  );

const handleSubmit = (event) => {
  event.preventDefault();
  // takes the formToJSON function and adds the DOM elements
  const data = formToJSON(form.elements);
  const code = document.getElementById("results-display");
  //Converts object to a readable format
  code.textContent = JSON.stringify(data, null, "  ");
};

form.addEventListener("submit", handleSubmit);
