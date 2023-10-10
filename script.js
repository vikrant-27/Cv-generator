function addNewWEField()
{
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter here");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
 
    weOb.insertBefore(newNode, weAddButtonOb); 
}

function addNewAQField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter here");


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
 
    aqOb.insertBefore(newNode, aqAddButtonOb); 

    

}

// function AddNewWeField() {
//     console.log("Add button clicked!");
//     // let newNode = document.createElement("textarea")
//     // newNode.classList.add("form-control");
//     // newNode.classList.add("wefield");
//     // newNode.classList.add("mt-2");
//     // // newNode.setAttribute("placeholder" , "Enter here");


//     // let weOb = document.getElementById("we");
//     // let weAddButtonOb = document.getElementById("weAddButton");
 
//     // weOb.insertBefore(newNode, weAddButtonOb); 
// }


function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML = nameField;

    let contactField=document.getElementById('contactField').value;                                      //first method
    let contactT=document.getElementById('contactT');
    contactT.innerHTML=contactField;

    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;        // second method

    fbT.innerHTML=document.getElementById('fbField').value;                                             // third (shortcut) method
    instaT.innerHTML=document.getElementById('instaField').value;
    linkedT.innerHTML=document.getElementById('linkedField').value;

    //objective

    objectiveT.innerHTML=document.getElementById('objectiveField').value;
    // weT.innerHTML=document.getElementById('we').value;

    //work exp
    let wes=document.getElementsByClassName('weField');
    let str=''

    for(let e of wes){
        str =str + `<li>${e.value}<li/>`;
    }
    document.getElementById('weT').innerHTML= str;

    //aq
    let aqs = document.getElementsByClassName("eqField");
    let str1 ='';

    for (let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;


    // code for setting image
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader()
    reader.readAsDataURL(file);    
    console.log(FileReader.result);


    reader.onloadend = function(){
        document.getElementById('imgTemplate').src= reader.result;
    }

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
}
// print cv
function printCV(){
    window.print();
}
