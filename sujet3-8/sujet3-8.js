/* Nom : Le Sech        
Prenom : Lise
Groupe : 4
*/

const key = "ebd55c711e7c44649adbc1d1bfab02f7";

document.addEventListener('DOMContentLoaded', function() {

    const URL = "https://api.spoonacular.com/recipes/search?cuisine=British&apiKey="+key;
    const disp = document.querySelector("#display");
    console.log(URL);

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        data = data.results.map(item => disp.innerHTML += (item.image +"<br></br>"))


    })
    .catch(err => console.log(err))
});