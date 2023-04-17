let mainSection = document.getElementById('main-accounting-section');
let htmlCode = localStorage.getItem('section');
// console.log(htmlCode);

let sections = [];
// counter values:
let AdminNumber = 0;
let markNumber = 0;
let devNumber = 0;
let finNumber = 0;

// avg value:
adminAvgSalary = 0;
markAvgSalary = 0;
devAvgSalary = 0;
finAvgSalary = 0;

// total salary:
let adminTotalSal = 0;
let markTotalSal = 0;
let devTotalSal = 0;
let finTotalSal = 0;

// for total row:
let totalEmployeesNum = 0;
let totalAvg = 0;
let totalSalary = 0;


function createTable(){
    let table = document.createElement('table');
    // first row////////////////////////////////////////////////////////
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

    // second row////////////////////////////////////////////////////////
    let heading2 = document.createElement('tr');
    // 1. department
    let administrationHeading = document.createElement('td');
    administrationHeading.textContent = "Administration";
    heading2.appendChild(administrationHeading);

    // 2. Number of Employees
    let empNumAdmin = document.createElement('th');
    empNumAdmin.textContent = AdminNumber;
    heading2.appendChild(empNumAdmin);

    // 3. Average Salary
    let avgSalaryAdmin = document.createElement('th');
    avgSalaryAdmin.textContent = adminAvgSalary;
    heading2.appendChild(avgSalaryAdmin);

    // 4. Total Salary
    let totalSalaryAdmin = document.createElement('th');
    totalSalaryAdmin.textContent = parseInt(adminTotalSal);
    heading2.appendChild(totalSalaryAdmin);


    table.appendChild(heading2);

    // third row////////////////////////////////////////////////////////
    let heading3 = document.createElement('tr');

    let marketingHeading = document.createElement('td');
    marketingHeading.textContent = "Marketing";
    heading3.appendChild(marketingHeading);

    // 2. Number of Employees
    let empNumMark = document.createElement('th');
    empNumMark.textContent = markNumber;
    heading3.appendChild(empNumMark);

    // 3. Average Salary
    let avgSalaryMark = document.createElement('th');
    avgSalaryMark.textContent = markAvgSalary;
    heading3.appendChild(avgSalaryMark);

    // 4. Total Salary
    let totalSalaryMark = document.createElement('th');
    totalSalaryMark.textContent = parseInt(markTotalSal);
    heading3.appendChild(totalSalaryMark);

    table.appendChild(heading3);


    // fourth row///////////////////////////////////////////////////////
    let heading4 = document.createElement('tr');

    let developmentHeading = document.createElement('td');
    developmentHeading.textContent = "Development";
    heading4.appendChild(developmentHeading);

      // 2. Number of Employees
    let empNumDev = document.createElement('th');
    empNumDev.textContent = devNumber;
    heading4.appendChild(empNumDev);

    // 3. Average Salary
    let avgSalaryDev = document.createElement('th');
    avgSalaryDev.textContent = devAvgSalary;
    heading4.appendChild(avgSalaryDev);

    // 4. Total Salary
    let totalSalaryDev = document.createElement('th');
    totalSalaryDev.textContent = parseInt(devTotalSal);
    heading4.appendChild(totalSalaryDev);

    table.appendChild(heading4);
    // fifth row////////////////////////////////////////////////////////
    let heading5 = document.createElement('tr');

    let financeHeading = document.createElement('td');
    financeHeading.textContent = "Finance";
    heading5.appendChild(financeHeading);

    // 2. Number of Employees
    let empNumFin = document.createElement('th');
    empNumFin.textContent = finNumber;
    heading5.appendChild(empNumFin);

    // 3. Average Salary
    let avgSalaryFin = document.createElement('th');
    avgSalaryFin.textContent = finAvgSalary;
    heading5.appendChild(avgSalaryFin);

    // 4. Total Salary
    let totalSalaryFin = document.createElement('th');
    totalSalaryFin.textContent = parseInt(finTotalSal);
    heading5.appendChild(totalSalaryFin);

    table.appendChild(heading5);



    // sixth row////////////////////////////////////////////////////////
    let heading6 = document.createElement('tr');

    let totalHeading = document.createElement('td');
    totalHeading.textContent = "Total";
    heading6.appendChild(totalHeading);

    // 2. Number of Employees
    let empNumTotal = document.createElement('th');
    empNumTotal.textContent = totalEmployeesNum;
    heading6.appendChild(empNumTotal);

    // 3. Average Salary
    let avgSalaryTotal = document.createElement('th');
    avgSalaryTotal.textContent = totalAvg;
    heading6.appendChild(avgSalaryTotal);

    // 4. Total Salary
    let totalSalaryTotal = document.createElement('th');
    totalSalaryTotal.textContent = totalSalary;
    heading6.appendChild(totalSalaryTotal);

    table.appendChild(heading5);

    table.appendChild(heading6);
    
    // for styling the table

    
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    table.style.border = "solid";

    let tr = document.querySelectorAll('table tr');
    tr.forEach(tr => {
      tr.setAttribute('style', 'padding: 20px');
      tr.setAttribute('style', 'border: solid');
    })
    let td = document.querySelectorAll('table td');
    td.forEach(td => {
      td.setAttribute('style', 'padding: 20px');
    })
    let th = document.querySelectorAll('table th');
    th.forEach(th => {
      th.setAttribute('style', 'padding: 20px');
    })

}


const cardSections = localStorage.getItem('section');
const sectionValues = [];

console.log(cardSections);


filterData();
    function filterData(){
    const element = document.createElement('div');
    element.innerHTML = cardSections;
    sections = Array.from(element.querySelectorAll('section')).map(section => {
    const nameElement = section.querySelector('h2');
    const departmentElement = section.querySelectorAll('p')[0];
    const positionElement = section.querySelectorAll('p')[1];
    const idElement = section.querySelectorAll('p')[2];
    const salaryElement = section.querySelectorAll('p')[3];
    
    return {
    name: nameElement.textContent,
    department: departmentElement.textContent,
    position: positionElement.textContent,
    id: idElement.textContent.slice(4),
    salary: salaryElement.textContent, 
  };
  
});
return sections;
}
  
console.log(sections);
// console.log(sections[0].name);
///////////////////////////////////
setTotalValues();

function setTotalValues(){
  for(let i = 0; i < sections.length; i++){
    if(sections[i].department == "Administration"){
      AdminNumber++;
      adminTotalSal += sections[i].salary;
      adminAvgSalary = parseInt(adminTotalSal) / AdminNumber;
    }
    else if(sections[i].department == "Marketing"){
      markNumber++;
      markTotalSal += sections[i].salary;
      markAvgSalary = parseInt(markTotalSal) / markNumber;
    }
    else if(sections[i].department == "Development"){
      devNumber++;
      devTotalSal += sections[i].salary;
      devAvgSalary = parseInt(devTotalSal) / devNumber;
    }
    else if(sections[i].department == "Finance"){
      finNumber++;
      finTotalSal += sections[i].salary;
      finAvgSalary = parseInt(finTotalSal) / finNumber;
    }
  }
  for(let k = 0; k < sections.length; k++){
    totalSalary+= parseInt(sections[k].salary);
  }
  
  // console.log(devNumber);
  // return AdminNumber, markNumber, devNumber, finNumber;
}

totalEmployeesNum = AdminNumber + markNumber + devNumber + finNumber;
totalAvg = totalSalary / totalEmployeesNum;



createTable();



