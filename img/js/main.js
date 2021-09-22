const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

  
    menu.addEventListener('click', () => {
          //Toggle Nav
        nav.classList.toggle('nav-active');
           
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`;
            }
           
       });
       //Menu icon Animation
       menu.classList.toggle('toggle');
    });

}

navSlide();