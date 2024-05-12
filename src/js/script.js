// loader
$(window).load(function () {
    $("#preloader").fadeOut();
    $(".options").delay(800).fadeOut("slow");
  });
  
    // Animation text
  
  gsap.to('h1',{
      text:"Hi, I`m Anna !",
      duration:5,
      delay:2,
      ease:'power1 in',
  
  }) 
  gsap.to(".typing", {
      text: "I love what I do !",
      duration:3,
      delay:3,
      repeat:-1,
      yoyo:true,
      repeatDelay:0.1,
      ease: "power1.in",
  })
  gsap.from('.skills__logo',{
      opacity:0,
      duration:2,
      stagger:0.7,
  })
  
  
  
  // Burger menu
  
  let navigation=document.querySelector('.navigation');
  document.querySelector('.burger__menu').onclick =function(){
      this.classList.toggle('active');
      navigation.classList.toggle('active');
  
    }    
    
    
    // для отправки писем
    
    $(document).ready(function(){
    
    $('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()){
      return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
    });
    
    // для крестика
    $('.modal__close').on('click', function() {
      $('.overlay,#thanks').fadeOut('slow');
    });
    
    });
    

  // Show
  
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }  
      },  
      color: {
        value: "#fff"
      },  
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },  
        polygon: {
          nb_sides: 5
        },  
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }  
      },  
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }  
      },  
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }  
      },  
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },  
      move: {
        enable: true,
        speed: 1.5,
        direction: "right",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }  
      }  
    },  
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },  
        onclick: {
          enable: true,
          mode: "repulse"
        },  
        resize: true
      },  
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }  
        },  
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },  
        repulse: {
          distance: 200,
          duration: 0.4
        },  
        push: {
          particles_nb: 4
        },  
        remove: {
          particles_nb: 2
        }  
      }  
    },  
    retina_detect: true
  });  
  try {
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
        stats.begin();
        stats.end();
        if (
            window.pJSDom[0].pJS.particles &&
            window.pJSDom[0].pJS.particles.array
        ) {  
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }    
        requestAnimationFrame(update);
    };    
    requestAnimationFrame(update);
} catch (e) {}    




  // var count_particles, stats, update;
  // stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.left = "0px";
  // stats.domElement.style.top = "0px";
  // document.body.appendChild(stats.domElement);
  // count_particles = document.querySelector(".js-count-particles");
  // update = function() {
  //   stats.begin();  
  //   stats.end();
  //   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;  
  //   }
  //   requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);

  

