// Your code here
function createEmployeeRecord([firstName, familyName, title, payRatePerHour]){
    return ({
        "firstName":firstName,
        "familyName":familyName,
        "title":title,
        "payRatePerHour":payRatePerHour,
        "timeInEvents":[],
        "timeOutEvents":[]
    })
}

function createEmployeeRecords(mainArray){
    mainArray.forEach(element => {
        createEmployeeRecord(element);
    });
}

function createTimeInEvent(empObj, dateStmp){
    let arr = dateStmp.split(" ");
    return empObj.timeInEvents.push({
        "TimeIn":{
            "date":arr[0],
            "time":arr[1]
        } 
    })
}