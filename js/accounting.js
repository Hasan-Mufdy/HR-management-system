let mainSection = document.getElementById('main-accounting-section');
let htmlCode = localStorage.getItem('section');
// console.log(htmlCode);

createTable();


function createTable(){
    let table = document.createElement('table');

    let heading = document.createElement('tr');
    // 1. department
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


const cardSections = localStorage.getItem('section');
const sectionValues = [];

console.log(cardSections);


filterData();
    function filterData(){
    const element = document.createElement('div');
    element.innerHTML = cardSections;
    const sections = Array.from(element.querySelectorAll('section')).map(section => {
    const nameElement = section.querySelector('h2');
    const departmentElement = section.querySelectorAll('p')[0];
    const positionElement = section.querySelectorAll('p')[1];
    const idElement = section.querySelectorAll('p')[2];
    
    return {
    name: nameElement.textContent,
    department: departmentElement.textContent,
    position: positionElement.textContent,
    id: idElement.textContent.slice(4),
  };
  
});
console.log(sections);
}
  