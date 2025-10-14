// Get the form - To have access to the input fields
const userRegistrationForm = document.querySelector("form");
const cardContainer = document.getElementById("cardContainer");

// Action/function that will be triffered after clicking "Register"
function registerUser() {
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

    // Use the information
    console.log(`Name: ${name}, Age: ${age}, Amimal: ${animal}, Gender ${gender}, Breed ${breed}
    `);

    // Create dynamic content
    const card = document.createElement("div");
    card.className = "col-md-4 m-5"

    card.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h3 class="card-title"> ${name} </h3>
                <h5 class="card-subtitle mb-2"> ${age} </h5>
                <h5 class="card-subtitle mb-2"> ${animal} </h5>
                <h5 class="card-subtitle mb-2"> ${gender} </h5>
                <h5 class="card-subtitle mb-2"> ${breed} </h5>       
                <h5 class="card-subtitle mb-2"> ${service} </h5>          
            </div>      
        </div>
    `;

    // Add the card to the div
    cardContainer.appendChild(card);

    // Clear the form
    userRegistrationForm.reset();

}


/*
const pets = [
    // Pet Registration
    function Pet (name, age, gender, animal, breed, service) {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.animal = animal,
        this.breed = breed,
        this.service = service    
    }
    let pet1 = new Pet("Kobe", 4, "Male", "Dog", "Maltipoo","The Works")
    let pet2 = new Pet("Pau", 1, "Male", "Dog", "Havapoo","The Works")
    let pet3 = new Pet("Mia", 11, "Female", "Cat", "Persian Himalayan","The Works")

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


