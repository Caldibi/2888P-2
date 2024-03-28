 async function getUser(){
    try {

    const responsive = await fetch('https://jsonplaceholder.typicode.com//users')
    const data = await responsive.json(); 

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
        cardDiv.style.width = "25rem";

        let postsLink = document.createElement("a");
        postsLink.href=`posts.html?userId=${userValue.id}`;
        postsLink.textContent="Gönderileri Görüntüle";
        
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.classList.add("back1");

        let cardIcon = document.createElement("i")
        cardIcon.classList.add("fa-user")
        cardIcon.classList.add("fa-solid")

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");

        let carP = document.createElement("p");
        carP.classList.add("card-text");

        let cardDivUl = document.createElement("div");
        cardDivUl.classList.add("card-body");
        cardDivUl.classList.add("back2");
        cardDivUl.style.height="170px";

        let carP2 = document.createElement("p");
        carP2.classList.add("card-text");

        let cardIcon1 = document.createElement("i")
        cardIcon1.classList.add("fa-building")
        cardIcon1.classList.add("fa-solid")
        
        let cardCom = document.createElement("div");
        cardCom.classList.add("card-body");
        cardCom.classList.add("back3");

        let cardIcon2 = document.createElement("i")
        cardIcon2.classList.add("fa-location-dot")
        cardIcon2.classList.add("fa-solid")

        let carP1 = document.createElement("p");
        carP1.classList.add("card-text");

        let cardInfo = document.createElement("a");
        cardInfo.classList.add("card-link");

        
        
        cardBody.appendChild(cardIcon)
        cardBody.appendChild(cardH5);
        cardBody.appendChild(carP);
        cardDiv.appendChild(cardBody);

        cardDivUl.appendChild(cardIcon1);
        cardDivUl.appendChild(carP2);
        cardDiv.appendChild(cardDivUl);

        cardCom.appendChild(cardIcon2);
        cardCom.appendChild(carP1);
        cardCom.appendChild(cardInfo);
        cardBody.appendChild(postsLink);
        cardDiv.appendChild(cardCom);

        

        newCol.appendChild(cardDiv);
        newElement.appendChild(newCol);
        document.body.appendChild(newElement);

        cardH5.innerHTML ="Id : "+ userValue.id +"<br> Name : "+ userValue.name +"<br> User Name : "+  userValue.username;
        carP.innerHTML="Adress City: "+ userValue.address.city +" <br> Street :"+ userValue.address.street +"<br> Suite"+userValue.address.suite +"<br> Zipcode"+userValue.address.zipcode;
        carP2.innerHTML="Company : " + userValue.company.name +"<br>  "+ userValue.company.catchPhrase +"<br> Bs : " + userValue.company.bs;
        carP1.innerHTML ="Contact information";
        cardInfo.innerHTML = "Phone :" + userValue.phone +"<br> Email :"+ userValue.email+"<br> Website :" + userValue.website;
    }
 



    } catch (error) {
        console.log(error);
    }
    

 }

 getUser();

 
  
