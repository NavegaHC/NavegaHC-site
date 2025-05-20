const checkboxes = document.querySelectorAll('.check-list');
const message = document.getElementById('message');

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        if (allChecked) {
            message.style.display = 'block';
        } else {
            message.style.display = 'none';
        }
    });
});