const ratingSection = document.getElementsByClassName('.card-container');
const gratitudeSection = document.getElementsByClassName('.thankYou-container');

let selectedRating;


function selectRating(btnid) {

    let ratingValues = document.querySelectorAll('.ratingBtn');
    ratingValues.forEach(() => {
        selectedRating = btnid.innerHTML;
        
    })
}

function submitRating() {
    
    document.getElementById('submitBtn').addEventListener('click', function() {

        document.getElementById('thankYou-container').style.visibility = 'visible';
        document.getElementById('card-container').style.visibility = 'hidden';

        document.getElementById('ratval').innerHTML = selectedRating;
        
    });
}