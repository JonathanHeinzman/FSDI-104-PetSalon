const salon = {
    Name: "Fur Seasons Pet Salon",
    Address: "1234 Pawprint Lane, Tailtown, USA",
    Schedule: "7 Days a Week | 9:00 AM to 6:00 PM",
    Phone: "(123) 456-PAWS (7237)" 
};


const salonDiv = document.getElementById("salonInfo");

salonDiv.innerHTML = `
    <h1>${salon.Name}</h1>
    <p><strong>Address:</strong> ${salon.Address} </p>
    <p><strong>Hours:</strong> ${salon.Schedule} </p>
    <p><strong>Phone Number:</strong> ${salon.Phone} </p>
`;

// Change Mode Button
$("#theme-switch").click(function () {

    console.log("Theme switch...");
    
    // 1. Change the CSS Class
    $("body").toggleClass("dark-mode");

    // 2. Change text based on the mode

    const isDark = $("body").hasClass("dark-mode");

    if(isDark) {
        $("#theme-icon").text("light_mode")
        //$("h1").text("Dark Mode");
    } else {
        $("#theme-icon").text("dark_mode")
        //("h1"$).text("Light Mode");
    }


});