/// <reference path="jquery-3.5.1.js" />

// function getUserLocation() {
//     return new Promise((resolve, reject) => {
//         const geoLocation = navigator.geolocation.getCurrentPosition(()=>{

//         });

//     })
// }

function getUserLocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

function getPosition() {
    getUserLocation()
        .then((position) => {
            $("#showResult").html(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        })
        .catch((err) => {
            alert(err.message);
        });
}
