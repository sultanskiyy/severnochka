let outarModal = document.getElementById("outer-modal");
let profile = document.getElementById("profile");
let formModal = document.getElementById("form-modal");
let profileObj = JSON.parse(localStorage.getItem("profile") || "{}");
let profileImg = document.getElementById("profile-img");
let profileName = document.getElementById("profile-name");

profileImg.src = profileObj.photo || "./images/avatar.png";
profileName.textContent = profileObj.name || "Алексей";

profile.addEventListener("click", function () {
    outarModal.classList.remove("hidden");
});

outarModal.addEventListener("click", function () {
    outarModal.classList.add("hidden");
});

formModal.addEventListener("click", function (e) {
    e.stopPropagation();
});

formModal.addEventListener("submit", function (e) {
    e.preventDefault();
    profileObj.photo = formModal.elements[0].value;
    profileObj.name = formModal.elements[1].value;
    profileObj.phone = formModal.elements[2].value;
    profileObj.password = formModal.elements[3].value;
    localStorage.setItem("profile", JSON.stringify(profileObj));
    profileImg.src = profileObj.photo || "./images/avatar.png";
    profileName.textContent = profileObj.name || "Алексей";
    outarModal.classList.add("hidden");
})