'use strict'

let employeesArray = [];
let salary = 0;

function Employee(ID, fullName, department, level, imageURL, salary){
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
    employeesArray.push(this);
}

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

//  function renderSalaries(){
//     for(let i = 0; i < employeesArray.length; i++){
//         let newEmpNames = document.createElement('p');
//         let newEmpSalaries = document.createElement('p');
//         let breakLine = document.createElement('hr');
        

//         newEmpNames.textContent = employeesArray[i].fullName;
//         newEmpSalaries.textContent = calculateSalary(employeesArray[i]);

//         document.querySelector('#employees-salaries').appendChild(newEmpNames);
//         document.querySelector('#employees-salaries').appendChild(newEmpSalaries);
//         document.querySelector('#employees-salaries').appendChild(breakLine);
        

//     }
// }

Employee.prototype.renderSalaries = function(){ 
    document.write(`Name: ${this.fullName} Salary: ${this.salary}`)
}

for(let i = 0; i < employeesArray.length; i++){
    employeesArray[i].calculateSalary();
    employeesArray[i].renderSalaries();
    document.write('<hr>');
    document.write('<br>');
}