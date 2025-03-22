// Hero Button Click
document.querySelector('button').addEventListener('click', function () {
    alert('Explore Packages Coming Soon! 🚀');
});
// Form Submission
document.querySelector('#bookingForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const destination = document.querySelector('#destination').value;
    const date = document.querySelector('#date').value;

    if (destination === '' || date === '') {
        alert('Please fill all the fields!');
    } else {
        alert(`Booking Confirmed for ${destination} on ${date}! 🎉`);
    }
});
