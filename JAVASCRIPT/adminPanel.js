// Function to display the "Notice" section
function showNoticeSection() {
    document.getElementById('noticeSection').style.display = 'block';
    document.getElementById('userManagementSection').style.display = 'none';
}

// Function to display the "User Management" section
function showUserManagementSection() {
    document.getElementById('noticeSection').style.display = 'none';
    document.getElementById('userManagementSection').style.display = 'block';
}

// Function to show the "Add User" form
function showAddUserForm() {
    document.getElementById('addUserForm').style.display = 'block';
    document.getElementById('modifyUserForm').style.display = 'none';
    document.getElementById('deleteUserForm').style.display = 'none';
}

// Function to show the "Modify User" form
function showModifyUserForm() {
    document.getElementById('modifyUserForm').style.display = 'block';
    document.getElementById('addUserForm').style.display = 'none';
    document.getElementById('deleteUserForm').style.display = 'none';
}

// Function to show the "Delete User" form
function showDeleteUserForm() {
    document.getElementById('deleteUserForm').style.display = 'block';
    document.getElementById('addUserForm').style.display = 'none';
    document.getElementById('modifyUserForm').style.display = 'none';
}

// Example of adding a notice image and text preview
document.getElementById('uploadNoticeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const noticeImage = document.getElementById('noticeImage').files[0];
    const noticeText = document.getElementById('noticeText').value;

    if (noticeImage) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('previewImage').src = reader.result;
            document.getElementById('previewText').textContent = noticeText;
            document.getElementById('noticePreview').style.display = 'block';
        };
        reader.readAsDataURL(noticeImage);
    }
});

// Function to modify user information
function modifyUser(userName) {
    alert('Modify user: ' + userName);
    // Add functionality to modify the user
}

// Function to delete a user
function deleteUser(userName) {
    alert('Delete user: ' + userName);
    // Add functionality to delete the user
}