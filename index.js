//const hamburger = document.querySelector('.hamburger');
//const navLinks = document.querySelector('.nav-links');

//hamburger.addEventListener('click', () => {
// navLinks.classList.toggle('active');
//});

//--sidebar-//
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});//
//--end-//




//--------------//
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider-image');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Initialize the slider by showing the first slide
  showSlide(currentIndex);
});


//--Deals in ----//
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 8;
    slider.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Optionally: Auto slide every 3 seconds
  setInterval(() => {
    nextButton.click();
  }, 1000);
});


//--tyres types--//

document.getElementById('filterBy').addEventListener('change', function () {
  const filterValue = this.value;
  // Add functionality to filter or sort items based on filterValue
  console.log('Selected Filter:', filterValue);
});


//---footer---//

document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const question = document.querySelector('input[type="text"]').value;
  alert(`Thank you for your question: "${question}" from ${email}`);
  // Implement further functionality here, such as sending data to the server
});

