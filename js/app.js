'use strict'

localStorage.clear();
let employeesArray = [];
let salary = 0;
let userID = 0;

// class Employee{
function Employee(ID, fullName, department, level, imageURL, salary){
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
    employeesArray.push(this);
}
// }
///////////////////////////////

loadSection();

///////////////////////////////

    let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
    let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
    let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
    let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
    let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
    let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
    let employee7 = new Employee(1006, 	"Hadi Ahmad", "Finance", "Mid-Senior");

//////////////////////////////

Employee.prototype.calculateSalary = function(){
    // function calculateSalary(emp){
    if(this.level === "Senior"){
        this.salary = (Math.floor(Math.random() * 2000) + 1500) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100;
    }
    else if(this.level === "Mid-Senior"){
        this.salary = (Math.floor(Math.random() * 1500) + 1000) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100;;
    }
    else if(this.level === "Junior"){
        this.salary = (Math.floor(Math.random() * 1000) + 500) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100;
    }
    return this.salary;
}
/////////////////////////////

Employee.prototype.renderSalaries = function(){ 
    document.write(`Name: ${this.fullName} Salary: ${this.salary}`)
}

for(let i = 0; i < employeesArray.length; i++){
    employeesArray[i].calculateSalary();
    employeesArray[i].renderSalaries();
    document.write('<hr>');
    document.write('<br>');
}

function generateID(){    
    Employee.ID = (Math.floor(Math.random() * 10000000)).toString().slice(0, 4);
    return Employee.ID;
}


//// form handling: ///////////////////////////////////////////////////////////


let form = document.getElementById('form');
let submitBtn = document.getElementById('submit');
form.addEventListener('submit', formHandler);
// form.addEventListener('submit', generateID);
form.addEventListener('submit', saveToLocalStorage);
let cardSection = document.getElementById('new-cards');

function formHandler(event){
    event.preventDefault();
    let nameInput = document.getElementById('name');
    let departmentInput = document.getElementById('dropdown-department');
    let levelInput = document.getElementById("dropdown-level");
    let imageInput = document.getElementById("image-url");

    let userName = nameInput.value;
    let userDepartment = departmentInput.value;
    let userLevel = levelInput.value;
    let userImage = imageInput.value;

    //to create another section inside the card section: /////////////////////////////
    let addedSection = document.createElement('section');
    addedSection.setAttribute("id", "addedSection")
    cardSection.appendChild(addedSection);
    //////////////////////////////////////////////////////////////////////////////////

    // to create and attach the image
    let profilePicture = document.createElement('img');
    profilePicture.setAttribute('src',userImage)
    addedSection.appendChild(profilePicture);
    profilePicture.alt = "Js image";

    // to create username
     let usernameCard = document.createElement('h2');
     usernameCard.textContent = userName;
     addedSection.appendChild(usernameCard);

// to print the selected items
    // 1. department
    let selectDepartment = document.getElementById('dropdown-department');
    let selectedDepartment = selectDepartment.value;

    let newdepartment = document.createElement('p');
    newdepartment.textContent = userDepartment;
    addedSection.appendChild(newdepartment);

    // 2. level
    let selectLevel = document.getElementById('dropdown-department');
    let selectedLevel = selectDepartment.value;

    let newLevel = document.createElement('p');
    newLevel.textContent = userLevel;
    addedSection.appendChild(newLevel);
    
    // user ID
    generateID();
    let newUserId = document.createElement('p');
    newUserId.textContent = `ID: ${Employee.ID}`;
    addedSection.appendChild(newUserId);

    // console.log(userName, userDepartment, userLevel, userImage);
    
    // card section styling:
    cardSection.style.border ="solid";
    cardSection.style.padding = "22px";
    cardSection.style.margin = "22px";
    cardSection.style.borderRadius = "5px";
    cardSection.style.marginLeft = "auto";
    cardSection.style.marginRight = "auto";
    cardSection.style.display = "flex";

    // added section styling:
    addedSection.style.border ="solid";
    addedSection.style.padding = "22px";
    addedSection.style.margin = "22px";
    addedSection.style.borderRadius = "5px";
    addedSection.style.marginLeft = "auto";
    addedSection.style.marginRight = "auto";

    // profile picture styling:
    profilePicture.style.width = "100px"
    profilePicture.style.borderRadius = "50%";

    // 
    // these elements were created in cardSection:
    // profilePicture
    // usernameCard
    // newdepartment
    // newLevel

    // to save users info in the local storage:
    // saveToLocalStorage();
    
}

function saveToLocalStorage(){
    let sectionToSave = cardSection.innerHTML;
    localStorage.setItem('section', sectionToSave);
    loadSection();
     
}

function loadSection(){
    let savedSection = localStorage.getItem('section');
    let loadedSection = document.getElementById('new-cards');
    loadedSection.innerHTML = savedSection;
}