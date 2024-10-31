window.onload = function() {
    function checkScreenWidth() {
        const birthdayMessage = document.querySelector('.birthday-message');
        if (window.innerWidth <= 600) {
            birthdayMessage.style.display = 'block';
            document.querySelector('.envelope').style.display = 'none';
        } else {
            birthdayMessage.style.display = 'none';
            document.querySelector('.envelope').style.display = 'block';
        }
    }

    // Check screen width on load
    checkScreenWidth();
    
    // Add event listener to check width on resize
    window.addEventListener('resize', checkScreenWidth);
};

document.addEventListener('DOMContentLoaded', function() {
  var envelope = document.querySelector('.envelope');
  var redirectButton = document.getElementById('redirectButton');

  envelope.addEventListener('click', function() {
      if (!envelope.classList.contains('open')) {
          envelope.classList.remove('new');
          envelope.classList.add('open');

          // Show the button after the animation is done
          setTimeout(function() {
              redirectButton.style.display = 'block';
          }, 3000); // Adjust time to match the animation duration
      }
  });

  redirectButton.addEventListener('click', function() {
      window.location.href = 'pictures.html'; // Redirect to pictures.html
  });
});
