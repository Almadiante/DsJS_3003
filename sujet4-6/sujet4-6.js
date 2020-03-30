/* Nom : Le Sech
Prenom : Lise   
Groupe : 4
*/
window.addEventListener('load', function() {

    let data = [];
    const display = document.querySelector("#display");
    const supp = document.querySelector(".card-action");


    for(let i = 0;  i<5; i++)
        data.push({
            id: i,
            src:"cat"+i+".jpg",
            title: "Chat "+i
        })
    for(let i = 0;  i<5; i++)
        data.push({
            id: i+5,
            src:"nightlife"+i+".jpg",
            title: "Nuit "+i
        })

    data.forEach(chat=>{
        let div = document.createElement('div');

        div.innerHTML=`
        <div class="col  m2">
        <div class="card">
            <div class="card-image">
                <img src="../../assets/images/${chat.src}">
                <span class="card-title"> Chat ${chat.id}</span>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </div
        `
        display.appendChild(div);
        div.querySelector('a').addEventListener("click",(e)=>{
            e.preventDefault();
            div
         });
    });

    

});