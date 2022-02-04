var modalBtn = document.querySelector("#modalBtn");
var userNameEl = document.querySelector("#name");
var userAgeEl = document.querySelector("#age");
var userWeightEl = document.querySelector("#weight");
var userBodyEl = document.querySelector("#bodyfat");
var saveBtn = document.querySelector("#save");
var user = {
    name: "",
    age: "",
    weight: "",
    bodyfat: "",
};

var saveUserInfo = function() {
    var userName = document.querySelector("#name").value
    var userAge = document.querySelector("#age").value
    var userWeight = document.querySelector("#weight").value
    var userBody = document.querySelector("#bodyfat").value
    user.name = userName
    user.age = userAge
    user.weight = userWeight
    user.bodyfat = userBody
    localStorage.setItem("userInfo",JSON.stringify(user))
}

saveBtn.addEventListener("click", saveUserInfo)