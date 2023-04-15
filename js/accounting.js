let mainSection = document.getElementById('main-accounting-section');
let htmlCode = localStorage.getItem('section');
// console.log(htmlCode);

createTable();



function createTable(){
    let table = document.createElement('table');

    // 1. department
    let heading = document.createElement('tr');

    let departmentHeading = document.createElement('th');
    departmentHeading.textContent = "Department  ";
    heading.appendChild(departmentHeading);
    // 2. Number of Employees
    let empNumHeading = document.createElement('th');
    empNumHeading.textContent = "Number of Employees  ";
    heading.appendChild(empNumHeading);
    // 3. Average Salary
    let avgSalaryHeading = document.createElement('th');
    avgSalaryHeading.textContent = "Average Salary  ";
    heading.appendChild(avgSalaryHeading);
    // 4. Total Salary
    let totalSalaryHeading = document.createElement('th');
    totalSalaryHeading.textContent = "Total Salary  ";
    heading.appendChild(totalSalaryHeading);



    table.appendChild(heading);
    mainSection.appendChild(table);

    // for styling the headings
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    
    departmentHeading.style.padding = "20px";
    empNumHeading.style.padding = "20px";
    avgSalaryHeading.style.padding = "20px";
    totalSalaryHeading.style.padding = "20px";

}