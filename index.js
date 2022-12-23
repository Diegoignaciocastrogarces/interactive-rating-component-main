function score() {

    const allRatings = document.querySelectorAll('.ratingBtn');
    
    allRatings.forEach((rating, i) => {
        rating.onclick = function() {
            rating.style.backgroundColor = 'hsl(216, 12%, 54%)';
            rating.style.color = 'hsl(0, 0%, 100%)';

            let current_rating = i + 1;
            
            allRatings.forEach((rating, j) => {
                if (current_rating != j + 1) {

                    rating.style.backgroundColor = 'hsl(210, 19%, 18%)';
                    rating.style.color = 'hsl(217, 12%, 63%)';
                }
            })

            
        }
    })
    
}
