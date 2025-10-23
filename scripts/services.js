// Select the form by ID using jQuery

$("#servicesForm").on("submit", function (event) {

    event.preventDefault();

    // Test the Save button
    // console.log('Save button clicked');

    // 1. Get the values from the form using jQuery
    const serviceName = $("#serviceName").val().trim();
    const serviceDescription = $("#serviceDescription").val().trim();
    const servicePrice = $("#servicePrice").val();

    // Test; Print in the console one single sentence
    // with the 3 values retrieved from the form.

    console.log(`The values are: ${serviceName}, ${serviceDescription}, ${servicePrice}`);

/*
    // 2. Validate the values
    if(!serviceName || !serviceDescription || servicePrice <= 0){
        // Assignment 1 (remove the alert)
        //alert("All values are required and the price must be greater than 0.");

        return;
    } else {
        // 3. Save the service - Assignment 3

        //alert("Service has been saved.");

    }
*/
    $("input").removeClass("error");

        let isValid = true;

        if (serviceName === "") {
          $("#serviceName").addClass("error");
          isValid = false;
        }
        if (serviceDescription === "") {
            $("#serviceDescription").addClass("error");
            isValid = false;
        }
        if (servicePrice === "") {
          $("#servicePrice").addClass("error");
          isValid = false;
        }
        
        // Stop if invalid (no alerts)
        if (!isValid) return;

    // 4. Clear the form
    //$("#servicesForm")[0].reset();
     
     $("input").removeClass("error");

}); 

