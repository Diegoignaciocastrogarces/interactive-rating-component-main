const submitButton = document.getElementById('submitBtn');
const rateButtons = document.querySelectorAll('.ratingBtn');

let selectedRating;
let ratingIsSelected;


rateButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        selectedRating = btn.textContent;
        ratingIsSelected = true;
    })
});


submitButton.addEventListener('click', function() {
    if (ratingIsSelected === true) {
        document.getElementById('thankYou-container').style.visibility = 'visible';
        document.getElementById('card-container').style.visibility = 'hidden';

        document.getElementById('ratval').textContent = selectedRating;
    }
    else {
        alert('No ha seleccionado ninguna calificación');
    }  
});
