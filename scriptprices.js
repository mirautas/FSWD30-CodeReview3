var insurance = "";
function calculateInsurance(){
	var name = document.forms["insuranceForm"]["name_field"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
	var age = document.forms["insuranceForm"]["age_field"].value;
    if (age == "") {
        alert("Age must be filled out");
        return false;
    }
	var country = document.forms["insuranceForm"]["country_field"].value;
	var horse_power = document.forms["insuranceForm"]["horsepower_field"].value;
	if (horse_power == "") {
        alert("Horse power must be filled out");
        return false;
    }
	insurance = horse_power * 100 / age + 150;
	document.getElementById("calculation").innerHTML = insurance;
}



