const accountManagementBtn = document.querySelector("#accountManagementBtn")
const notificationsBtn = document.querySelector("#notificationsBtn")
const systemManagementBtn = document.querySelector('#systemManagementBtn')

const accountManagement = document.querySelector('#accountManagement')
const notifications = document.querySelector('#notifications')
const systemManagement = document.querySelector('#systemManagement')

systemManagementBtn.addEventListener("click",()=>{
    accountManagement.style.display ="none"
    notifications.style.display ="none"
    systemManagement.style.display ="block"
})

notificationsBtn.addEventListener("click",()=>{
    accountManagement.style.display ="none"
    systemManagement.style.display ="none"
    notifications.style.display ="block"
})

accountManagementBtn.addEventListener("click",()=>{
    notifications.style.display ="none"
    systemManagement.style.display ="none"
    accountManagement.style.display="block"
})
