// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
// With this code, we:
//      1. Declare a variable, tbody
//      2. Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

// function to fill table with data
function buildTable(data) {

    // clear previous filtered table data
    tbody.html("");
    
    // add data into table:
    // loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and 
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // create a variable to append data to a table:
            let cell = row.append("td");
            // add the values
            cell.text(val);
            }
        );
    });
    }