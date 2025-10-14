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