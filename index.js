// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//creating an anonymous function
const returnFirstTwoDrivers = function(driver){
    return driver.slice(0,2);
}

const returnLastTwoDrivers = function(driver){
    return driver.slice(2,4);
}
//creating a function that has two elements that were previously the function
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// creating a function that should give a value using created multiple times
const createFareMultiplier = function(fareMultiplier){
    return function(fare){
        return fare * fareMultiplier;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversArray, fcn) {
    return fcn(driversArray);
}
