// Get the form - To have access to the input fields
const userRegistrationForm = document.querySelector("form");
const petTableBody = document.getElementById("petTableBody");
function Pet (name, age, gender, animal, breed, service) {
    this.name = name;
    this.age = age;
    this.animal = animal;
    this.gender = gender;
    this.breed = breed;
    this.service = service;    
}


// Action/function that will be triggered after clicking "Register"
function registerUser(event) {
    // Prevent the browser to be refreshed - To see the logs
    event.preventDefault();

    // Test the connection from the function to our button
    console.log("Clicked");

    // Get the fields value / user input
    const name = userRegistrationForm.elements["name"].value;
    const age = userRegistrationForm.elements["age"].value;
    const animal =  userRegistrationForm.elements["animal"].value;
    const gender =  userRegistrationForm.elements["gender"].value;
    const breed =  userRegistrationForm.elements["breed"].value;
    const service =  userRegistrationForm.elements["service"].value;

    console.log(name);

    let newPet = new Pet(name, age, animal, gender, breed, service);

    displayRow(newPet);



    // Clear the form
    userRegistrationForm.reset();

}

// New function: displayRow (replaces displayPetNames)
function displayRow(newPet){
    
    const tableBody = document.getElementById("petTableBody");
   
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${newPet.name}</td>
        <td>${newPet.age}</td>
        <td>${newPet.animal}</td>
        <td>${newPet.gender}</td>
        <td>${newPet.breed}</td>
        <td>${newPet.service}</td>
        <td>
        <button class="btn btn-danger" onclick="deleteRow(this)">Delete</button>
        </td>
    
     `;

    tableBody.appendChild(row);
}
 


function deleteRow(button){
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
        
}



//class 4
/*
function Pet (name, age, gender, animal, breed, service) {
    this.name = name,
    this.age = age,
    this.animal = animal,
    this.gender = gender,
    this.breed = breed,
    this.service = service    
}

function registerPet(event){
    event.preventDefault{};

    const name = userRegistrationForm.elements["name"].value;
    const age = userRegistrationForm.elements["age"].value;
    const animal =  userRegistrationForm.elements["animal"].value;
    const gender =  userRegistrationForm.elements["gender"].value;
    const breed =  userRegistrationForm.elements["breed"].value;
    const service =  userRegistrationForm.elements["service"].value;

    const newPet = new Pet(name, age, animal, gender, breed, service );
    
    const petCardContainer = document.getElementById(petCardContainer);

    const card = document.createElement("div");
    card.className = "card shadow-sm";
    card.style.width = "18rem";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = newPet.name;

    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
    petCardContainer.appendChild(card);
}
/*        
        





        
/*

    let pet1 = new Pet("Kobe", 4, "Dog", "Male", "Maltipoo","The Works")
    let pet2 = new Pet("Pau", 1, "Dog", "Male", "Havapoo","The Works")
    let pet3 = new Pet("Mia", 11, "Cat","Female", "Persian Himalayan","The Works")

    {
        name: "Kobe",
        age: 4,
        gender: "Male",
        service: "The Works",
        animal: "Dog",
        breed: "Dog: Maltese Poodle mix (Maltipoo)"
    },
    {
        name: "Pau",
        age: 1,
        gender: "Male",
        service: "The Works",
        animal: "Dog",
        breed: "Dog: Havanese Poodle mix (Havapoo)"
    },
    {
        name: "Mia",
        age: 11,
        gender: "Female",
        service: "The Works",
        animal: "Cat",
        breed: "Cat: Persian Himalayan"
    }
];

// Display pet names
function displayPetNames(Pet){
    const list = document.getElementById();
    list.innerHTML = "";
    
    for(let i = 0; i < Pet.length; i++){
        const li = document.createElement("li");
        li.textContent = pets[i].name;
        list.appendChild(li);
    }
}

// Average pet age
function displayAverageAge() {
    if (pets.length === 0) {
        document.getElementById("averageAge").textContent = "0";
        return;
    }
    
    let totalAge = 0;
    for (let i = 0; i < pets.length; i++) {
        totalAge += pets[i].age;
    }
    
    const average = totalAge / pets.length;
    document.getElementById("averageAge").textContent = average.toFixed(1);
}

// Registered pets count
function updatePetNumber(){
    const total = pets.length;
    document.getElementById("totalPets").textContent = total;
}


displayPetNames();
displayAverageAge();
updateTotalPets();
*/