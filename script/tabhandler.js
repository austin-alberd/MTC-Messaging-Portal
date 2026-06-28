const navbar = document.querySelector("#navbar")
const loginPage = document.querySelector("#loginPage")
const notificationPageRegular = document.querySelector("#notifications_page")

function showLoginPage(){
    navbar.style.display ="none"
    notificationPageRegular.style.display = "none"
    loginPage.style.display = "block"
}

function showRegularNotificationPage(){
    navbar.style.display ="block"
    notificationPageRegular.style.display = "block"
    loginPage.style.display = "none"
}