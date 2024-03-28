
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

console.log(userId);

async function userIdSearch (id){
try {
if(id == ""){
    id = Number(prompt("Lütfen 1-10 arasında bir değer giriniz.")); 

    if(id == "")  throw "Boş";
    if(isNaN(id)) throw "Numara Değil";
    if(id > 10)   throw "Yüksek";
    if(id < 1)  throw "Düşük";
}
   
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const data = await response.json();
     console.log(data);

     let newElement = document.createElement('div');
    newElement.classList.add("row");

     for(let i = 0; i< 10; i++ ){
        const userValue = data[i];
       console.log(userValue);
    
        let newCol = document.createElement('div');
        newCol.classList.add("col-6");
        newCol.style.marginTop="50px";
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.margin = "15px";
        cardDiv.style.width = "26rem";
        cardDiv.style.height = "10rem";
        
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        

        let cardIcon = document.createElement("i")
        cardIcon.classList.add("fa-user")
        cardIcon.classList.add("fa-solid")

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");

        let carP = document.createElement("p");
        carP.classList.add("card-text");

        cardBody.appendChild(cardIcon)
        cardBody.appendChild(cardH5);
        cardBody.appendChild(carP);
        cardDiv.appendChild(cardBody);

    
        newCol.appendChild(cardDiv);
        newElement.appendChild(newCol);
        document.body.appendChild(newElement);

        cardH5.innerHTML =" User Id : "+ userValue.userId +"<br> Id : "+ userValue.id;
        carP.innerHTML="Title: "+ userValue.title ;
       
    }


} catch (err) {
    alert("Değer : " + err);
}

}

userIdSearch(userId);
