function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkMaxRequests(){
    countAPI++;

    if (countAPI >= maxRequests){
        clearInterval(apiInterval);
        const finalTime = new Date()
        document.getElementById('timeAPI').innerHTML = `${(finalTime.getTime() - initialTime.getTime())/1000} segundos`;
    } 
}

function checkMaxRequestsLegacy(){
    countLegacy++;

    if (countLegacy >= maxRequests){
        clearInterval(apiIntervalLegacy);
        const finalTime = new Date()
        document.getElementById('timeLegacy').innerHTML = `${(finalTime.getTime() - initialTimeLegacy.getTime())/1000} segundos`;
    } 
}


function createRequest(method, url) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Accept", "application/json");
    return xhr;
}

function sendClockingRegister(data){
    const xhr = createRequest('POST', 'http://localhost:3001/clocking-register')

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('registers').innerHTML = JSON.stringify(data) + '<br>' + document.getElementById('registers').innerHTML
            checkMaxRequests();
            return;
        }
    };

    xhr.send(JSON.stringify(data));
}

function sendClockingRegisterLegacy(data){
    fetch("https://api.mockytonk.com/proxy/ab2198a3-cafd-49d5-8ace-baac64e72222", {
        method: "POST",
        headers: [
            ["Content-Type", "application/json"]
        ],
        mode: 'no-cors',
        body: JSON.stringify(JSON.stringify(data))
    }).then(resp=>{
        document.getElementById('registersLegacy').innerHTML = JSON.stringify(data) + '<br>' + document.getElementById('registersLegacy').innerHTML
        checkMaxRequestsLegacy();
    })
}

const maxRequests = 15;
var countAPI = 0;
var countLegacy = 0;
const initialTime = new Date()

var apiInterval = setInterval(() => {
    const employerId = getRandomIntInclusive(1,10);
    const employeeId = getRandomIntInclusive(1,999);
    const includeAt = new Date();
    
    sendClockingRegister({
        includeAt,
        employeeId,
        employerId
    })
}, 100)

const initialTimeLegacy = new Date()

var apiIntervalLegacy = setInterval(() => {
    const employerId = getRandomIntInclusive(1,10);
    const employeeId = getRandomIntInclusive(1,999);
    const includeAt = new Date();
    
    sendClockingRegisterLegacy({
        includeAt,
        employeeId,
        employerId
    })
}, 500)
