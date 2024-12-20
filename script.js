const vittoProfileButton = document.querySelector('.vitto-profile-button');
const vittoProfileDropdown = document.querySelector('.vitto-profile-dropdown');

vittoProfileButton.addEventListener('click', function() {
    vittoProfileDropdown.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!vittoProfileButton.contains(event.target) && !vittoProfileDropdown.contains(event.target)) {
        vittoProfileDropdown.classList.remove('show');
    }
});
