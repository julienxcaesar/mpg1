"use strict";
//declarations

const $ = selector => document.querySelector(selector);
const getErrorMsg = lbl => `${lbl}  Must be a valid number greater than zero.`;
const numErrMsg =  num =>  `Not a valid entry, Must be a valid Number GREATER than 0`


// focus function
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
//main function processing entries
const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles)) {
        alert(getErrorMsg("Miles: Non numeric number"));
        focusAndSelect("#miles");
    } 
    else if (miles <= 0) {
        alert(numErrMsg("Miles Entered"));
        focusAndSelect("#miles")
    }
    else if (isNaN(gallons)) {
        alert(getErrorMsg("Gallons: Non numeric number"));
        focusAndSelect("#gallons");
    } 
    else if (gallons <= 0) {
        alert(numErrMsg("Gallons Entered"));
        focusAndSelect("#gallons")
    }
    else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};
// function that clear entries
const clearEntries = entry => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    focusAndSelect("#miles");
}

const clearEntries1 = entry => {
    $("#gallons").value = "";
    $("#mpg").value = "";
    focusAndSelect("#gallons");
}
const clearEntries2 = entry => {
    $("#miles").value = "";
    $("#mpg").value = "";
    focusAndSelect("#miles");
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#gallons").addEventListener("dblclick", clearEntries1)
    $("#miles").focus(); $("#miles").addEventListener("dblclick", clearEntries2);
    $("#clear").addEventListener("click", clearEntries);
 })
