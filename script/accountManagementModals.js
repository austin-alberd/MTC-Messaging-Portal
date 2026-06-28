// Button references
const addUserBtn = document.querySelector("#addUserBtn")
const editUserBtn = document.querySelector("#editUserBtn")
const deleteUserBtn = document.querySelector("#deleteUserBtn")

// Modal references
const addUserModal = new bootstrap.Modal(document.querySelector("#addUserModal"))
const editUserModal = new bootstrap.Modal(document.querySelector("#editUserModal"))
const deleteUserModal = new bootstrap.Modal(document.querySelector("#deleteUserModal"))

// Form references
const addUserForm = document.querySelector("#addUserForm")
const editUserForm = document.querySelector("#editUserForm")
const deleteUserForm = document.querySelector("#deleteUserForm")

// Submit button references
const addUserSubmit = document.querySelector("#addUserSubmit")
const editUserSubmit = document.querySelector("#editUserSubmit")
const deleteUserSubmit = document.querySelector("#deleteUserSubmit")

// Object to store accessible form values
const formValues = {
    addUser: {},
    editUser: {},
    deleteUser: {}
}

// Open modals on button click
addUserBtn.addEventListener("click", () => addUserModal.show())
editUserBtn.addEventListener("click", () => editUserModal.show())
deleteUserBtn.addEventListener("click", () => deleteUserModal.show())

// Capture form values on submit
addUserSubmit.addEventListener("click", () => {
    formValues.addUser = {
        username: document.querySelector("#addUsername").value,
        email: document.querySelector("#addEmail").value,
        userType: document.querySelector("#addUserType").value
    }
    console.log("Add User Form Values:", formValues.addUser)
    // Close modal after capturing values
    addUserModal.hide()
})

editUserSubmit.addEventListener("click", () => {
    formValues.editUser = {
        username: document.querySelector("#editUsername").value,
        email: document.querySelector("#editEmail").value,
        userType: document.querySelector("#editUserType").value
    }
    console.log("Edit User Form Values:", formValues.editUser)
    // Close modal after capturing values
    editUserModal.hide()
})

deleteUserSubmit.addEventListener("click", () => {
    formValues.deleteUser = {
        username: document.querySelector("#deleteUsername").value
    }
    console.log("Delete User Form Values:", formValues.deleteUser)
    // Close modal after capturing values
    deleteUserModal.hide()
})
