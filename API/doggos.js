
let runtime=0;

function addDoggo () { 
    const select=document.querySelector(`.selector`)
    const mole=document.querySelector(`.mole`);
    if (runtime!=0){
        const img=document.querySelector(`.picture`)
        img.classList.add(`hidden`);
    }
    if (select.value!="doggo") {
    mole.classList.remove(`hidden`);    
    const BREED=`https://dog.ceo/api/breed/${select.value}/images/random`
    fetch(BREED)

    .then(response => {return response.json()})

    .then(function(data){

        if (runtime!=0) {
            const img=document.querySelector(`.picture`);
            img.src=data.message;
            img.alt=`Cute Doggo`;
            img.classList.remove(`hidden`);
            mole.classList.add(`hidden`);
        } else {
            runtime++;
            const img=document.createElement(`img`);
            img.src=data.message;
            img.alt=`Cute Doggo`;
            img.className=`picture`;
            mole.classList.add(`hidden`);
            document.querySelector(`.doggos`).appendChild (img);
            
        }
     })

}
}



async function getList (event) {
    const res= await fetch (BREEDS_URL);
    const resJson=await res.json();
    const arr = Object.keys(resJson.message);
    arr.forEach (e=>{
        const opt= document.createElement(`option`);
        opt.value=e;
        opt.innerText=e;
        select.appendChild(opt);
    })
}




const BREEDS_URL= `https://dog.ceo/api/breeds/list/all`;
const select = document.querySelector(`.selector`);

getList();
document.querySelector(".add-doggo").addEventListener(`click`, addDoggo)

