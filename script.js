function displayDateTime() {
    const dateTimeLocation = document.getElementById('date-time-location');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = currentDate.toLocaleDateString('en-US', options);
    dateTimeLocation.innerHTML = formattedDateTime;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const dateTimeLocation = document.getElementById('date-time-location');
    dateTimeLocation.innerHTML += "<br>Location: " + position.coords.latitude + ", " + position.coords.longitude;
}

window.onload = function() {
    displayDateTime();
    getLocation();
}
