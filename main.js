function royxatdanOt() {
    var ism = document.getElementById("ism").value.trim();
    var parol = document.getElementById("parol").value.trim();
    var tel = document.getElementById("tel").value.trim();

    localStorage.setItem("user", JSON.stringify({ ism: ism, nick: ism, parol: parol, tel: tel }));
    window.location.href = "index1.html";
}

function hisobgaKir() {
    var ism = document.getElementById("ism").value.trim();
    var parol = document.getElementById("parol").value.trim();

    localStorage.setItem("user", JSON.stringify({ ism: ism, nick: ism, parol: parol }));
    localStorage.setItem("kirgan", "ha");
    window.location.href = "index2.html";
}

function kirganmi() {
    if (localStorage.getItem("kirgan") !== "ha") {
        window.location.href = "index1.html";
    }
}

function chiqish() {
    localStorage.removeItem("kirgan");
    window.location.href = "index1.html";
}

var userFooter = document.querySelector(".user-footer");
if (userFooter) {
    userFooter.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index3.html";
    });
}

var loginLink = document.querySelector(".a1 .link-text");
if (loginLink) {
    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index1.html";
    });
}

var signupLink = document.querySelector(".links a:last-child");
if (signupLink) {
    signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
}