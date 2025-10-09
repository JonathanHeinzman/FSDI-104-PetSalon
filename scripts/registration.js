


// Pet Registration
const pets = [

    {
        name: "Kobe",
        age: 4,
        gender: "Male",
        service: "Teddy-Bear cut, nail trim, bath",
        breed: "Dog: Maltese Poodle mix (Maltipoo)"
    },
    {
        name: "Pau",
        age: 1,
        gender: "Male",
        service: "Teddy-Bear cut, nail trim, bath",
        breed: "Dog: Havanese Poodle mix (Havapoo)"
    },
    {
        name: "Mia",
        age: 11,
        gender: "Female",
        service: "Lion cut, nail trim, bath",
        breed: "Cat: Persian Himalayan"
    }
];


// Display pet names
function displayPetNames(){
    const list = document.getElementById("petNamesList");
    list.innerHTML = "";

    for(let i = 0; i < pets.length; i++){
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


window.onload = function () {
    displayPetNames();
    displayAverageAge();
    updateTotalPets();
};




