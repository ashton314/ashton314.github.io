document.addEventListener('DOMContentLoaded', function() {
  const menuControl = document.querySelector('#menu-control');
  const bookMenuLinks = document.querySelectorAll('#TableOfContents a');

  bookMenuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      console.log("boink");
      /* event.preventDefault(); // Prevent the default link behavior */
      if (menuControl) {
        menuControl.checked = !menuControl.checked; // Toggle the input
      }
    });
  });
});
