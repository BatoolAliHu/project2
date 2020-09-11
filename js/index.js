let pets = [
  {
    name: "batool",
    type: "dog",
    city: "Bayan",
    img: "images/pet-04.png"
  },
  {
    name: "batool33",
    type: "cat",
    city: "Bayan",
    img: "images/pet-02.png"
  },
  {
    name: "batool44",
    type: "dog",
    city: "Bayan",
    img: "images/pet-01.png"
  },
  {
    name: "batool55",
    type: "dog",
    city: "Bayan",
    img: "images/pet-03.png"
  },
  {
    name: "batool2",
    type: "dog",
    city: "Salmiya",
    img: "images/pet-04.png"
  },
  {
    name: "batool24",
    type: "cat",
    city: "Salmiya",
    img: "images/pet-02.png"
  },
  {
    name: "batool25",
    type: "dog",
    city: "Salmiya",
    img: "images/pet-01.png"
  },
  {
    name: "batool26",
    type: "dog",
    city: "Salmiya",
    img: "images/pet-03.png"
  },
  {
    name: "batool3",
    type: "dog",
    city: "Rumithya",
    img: "images/pet-01.png"
  },
  {
    name: "batool4",
    type: "dog",
    city: "Daiya",
    img: "images/pet-04.png"
  },
  {
    name: "batool5",
    type: "dog",
    city: "Hateen",
    img: "images/pet-03.png"
  },
];


let stories = [

    "story1",
    "story2",
    "story3"

];


document.getElementById("searchh").addEventListener("click" , (e) => {
   e.preventDefault();
   let searchvalue =  document.getElementById("searchtext");
   let widgets = document.getElementById("widgets");
   if(searchvalue.value == ""){
    widgets.innerHTML = "No Matches";
   }else{
       widgets.innerHTML = null;
    for(let i = 0; i < pets.length; i++){
       if(pets[i].city.toUpperCase() == searchvalue.value.toUpperCase()){
            let widget = `<div class="widget">
            <div class="widget__image">
                <img src="${pets[i].img}" alt="pet image">
            </div>
            <div class="widget__desc">
                <h4>${pets[i].name}</h4>
                <p>${pets[i].type}</p>
                <p>${pets[i].city}</p>
            </div>
        </div>`;
        widgets.innerHTML += widget;
       }
    }
}


});


for(let i = 0; i < 3; i++){
    let themagicalelement = document.getElementsByClassName("link")[i];
    themagicalelement.addEventListener("click" , function(e) {
        e.preventDefault();
        themagicalelement.innerHTML = `<p>${stories[i]}</p>`
    }



    )}