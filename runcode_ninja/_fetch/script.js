let items = [];
let output = '<h2 class="mb-4">Jokes</h2>';
const getPosts = async () => {
  const response = await fetch(
    "http://api.icndb.com/jokes/random/3",
    {}
  ).catch(error => Error(error));
  const data = await response.json();
  console.log(data);
  data.value.map(val => {
    console.log(val);
    output += `
    <div class="card card-body mb-3">
                <h3> ${val.id}</h3>
                <p> ${val.joke}<p>
            </div>
            `;
  });
  document.getElementById("output").innerHTML = output;
};

document.getElementById("fetchJokes").addEventListener("click", getPosts);
