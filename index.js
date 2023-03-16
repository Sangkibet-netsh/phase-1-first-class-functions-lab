// Code your solution in this file!
const drivers = ['Elkana', 'Kibet', 'Sang', 'Victor'];
const returnFirstTwoDrivers = (drivers)=>([drivers[0],drivers[1]])

//const returnFirstTwoDrivers = (drivers)=>{ return [drivers[0],drivers[1]]}

const returnLastTwoDrivers= (drivers)=>([drivers[2],drivers[3]])


const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];


//create a function that returns a function
function createFareMultiplier(myDestin){
    return  function(amountPaid){
        return myDestin*amountPaid;
    }

}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers =(arrayOfDrivers,anyTwoDriver)=>anyTwoDriver(arrayOfDrivers);