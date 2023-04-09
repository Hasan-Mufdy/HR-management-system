function Employee(ID, fullName, department, level, imageURL, salary){
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
}

// let salary = 0;
let employeesArray = [];
createInstances();
renderSalaries()

///////////////////////////////
function createInstances(){

    let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
    let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
    let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
    let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
    let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
    let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
    let employee7 = new Employee(1006, 	"Hadi Ahmad", "Finance", "Mid-Senior");

    employeesArray.push(employee1, employee2, employee3, employee4, employee5, employee6, employee7);
    // return employeesArray;
    // console.log(employee2.fullName);
}

//////////////////////////////

// let testEmployee = new Employee(233, "hasan", "IT", "senior", "some-url", 1000000);
// console.log(testEmployee);

function calculateSalary(emp){
    if(emp.level = "Senior"){
        emp.salary = (Math.floor(Math.random() * 2000) + 1500) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100;
    }
    else if(emp.level = "Mid-Senior"){
        emp.salary = (Math.floor(Math.random() * 1500) + 1000) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100;;
    }
    else if(emp.level = "Junior"){
        emp.salary = (Math.floor(Math.random() * 1000) + 500) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100;
    }
    return emp.salary;      //*****************************
}
/////////////////////////////

function renderSalaries(){
    for(let i = 0; i < employeesArray.length; i++){
        let newEmpNames = document.createElement('p');
        let newEmpSalaries = document.createElement('p');
        
        //calculateSalary(employeesArray[i]);

        newEmpNames.textContent = employeesArray[i].fullName;
        newEmpSalaries.textContent = calculateSalary(employeesArray[i]);
        document.querySelector('#employees-salaries').appendChild(newEmpNames);
        document.querySelector('#employees-salaries').appendChild(newEmpSalaries);
    }
}



//////////////////////////////
// random tests
// console.log(Math.floor(Math.random() * 2000) + 1500);
// console.log((1000) - (1000 * 10) /100);
// console.log(employeesArray)
// console.log((Math.floor(Math.random() * 1000) + 500) - ((Math.floor(Math.random() * 2000) + 1500) * 7.5) / 100);