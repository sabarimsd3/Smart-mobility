

const topBars = document.querySelectorAll(".top-bar");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    topBars.forEach(topBar => {
        if (isInViewport(topBar)) {
            topBar.classList.add('active'); 
        } else {
            topBar.classList.remove('active'); 
        }
    });
}


window.addEventListener('scroll', handleScroll);


handleScroll();

// -----------------form-valid-----------------

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    if (emailInput.value) {
        document.getElementById('thankYouMessage').style.display = 'block';
    } else {
        alert('Please enter your email address.');
    }
});