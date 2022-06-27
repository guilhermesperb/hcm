function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

function sendClockingRegister(data){
    const xhr = createCORSRequest('POST', 'http://localhost:3001/clocking-register')

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('registers').innerHTML = JSON.stringify(data) + '<br>' + document.getElementById('registers').innerHTML
            return;
        }
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(JSON.stringify(data));
}

setInterval(() => {
    const employerId = getRandomIntInclusive(1,10);
    const employeeId = getRandomIntInclusive(1,999);
    const includeAt = new Date();
    
    sendClockingRegister({
        includeAt,
        employeeId,
        employerId
    })
}, 100)