gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


gsap.to('.text-wrapper div:nth-child(1)', 0.1, {
  scrollTrigger: {
    trigger: '.text-wrapper div:nth-child(1)',
    // start: 'top 90%',
    // end: 'top 40%',
    start:'top 90%',
    end:'top 55%',
    scrub: 0.1
  },
  backgroundSize: '100% 100%',
  ease: 'none'
})

gsap.to('.text-wrapper div:nth-child(2)', 0.1, {
  scrollTrigger: {
    trigger: '.text-wrapper div:nth-child(2)',
    // start: 'top 60%',
    // end: 'top 20%',
    start:'top 80%',
    end:'top 50%',
    scrub: 0.1
  },
  backgroundSize: '100% 100%',
  ease: 'none'
})


// $('.work li').mouseover(function(){
//   $(this).find('.work_text').stop().fadeIn(200);
// })

// $('.work li').mouseout(function(){
//   $(this).find('.work_text').stop().fadeOut(200);
// })

// fadeInSequence();

// setInterval(function () {
//   $('.keyword_wrap_wrap div').stop().fadeOut();
//   fadeInSequence();
// }, 6600); 

// $('.header_right ul').mouseover(function () {
//   $('.mouse-effect').stop().fadeOut(150)
// }).mouseout(function () {
//   $('.mouse-effect').stop().fadeIn(150)
// })

// $(".keyword_wrap div").each(function (index) {
// $(this).delay(index * 500).animate({ opacity: 1 }, 800);

// gsap.from('.about_text', {
//   scrollTrigger: {
//     trigger: '.about_text',
//     start: "top 60%",
//     // end:"top 40%",
//     // scrub:1,
//   },
//   opacity: 0,
//   duration: 1.3,
//   ease: "bounce.out",
//   y: -300
// });





$(".keyword_wrap>div").each(function () {
  $(this).mouseenter(function () {
      gsap.to(this, 0.6, {
          opacity: 1,
          x: -200, 
          ease: "power3.out", 
      });
  }).mouseleave(function () {
      gsap.to(this, 0.6, {
          opacity: 0.12,
          x: 0, 
          ease: "expo.out", 
      });
  });
});

gsap.from(".tool_type", 1, {
  scrollTrigger: {
    trigger: ".tool_type_wrap",
    start: "top 70%"
  },
  y: 100,
  opacity: 0,
  stagger: 0.14,
  ease: "power3.out"
})

gsap.from(".tool_title", 1.2, {
  scrollTrigger: {
    trigger: ".tool_title",
    start: "top 85%"
  },
  y: 40,
  opacity: 0,
  ease: "power3.out"
})

$(".tool_type").each(function () {
  gsap.set(this, {
    borderRadius: "1rem",
  })

  const toolTypeTitle = $(this).find('.tool_type_title');
  const toolTypeContent = $(this).find('.tool_type_content');

  $(this).mouseenter(function () {
    gsap.to(this, 3, {
      borderRadius: "10rem",
      ease: "expo.out",
    })

    gsap.to(this, 0.3, {
      backgroundColor: "#2f2f2f",
      ease: "power3.out",
    });

    gsap.to([toolTypeTitle, toolTypeContent], 0.3, {
      color: "#fff",
      opacity: 1,
      ease: "power3.out",
    })
  }).mouseleave(function () {
    gsap.to(this, 3, {
      borderRadius: "1rem",
      ease: "expo.out",
    })

    gsap.to(this, 0.3, {
      backgroundColor: "#FFE6E7",
      ease: "expo.out",
    });

    gsap.to(toolTypeTitle, 0.3, {
      color: "#FFAFB4",
      ease: "expo.out",
    })

    gsap.to(toolTypeContent, 0.3, {
      color: "#000",
      opacity: 0.4,
      ease: "expo.out",
    })
  });
});




// gsap.to(".about_text", {
//   scrollTrigger: {
//     trigger: ".about_text",
//     start: "top 50%"
//   },
//   y: 0,         
//   opacity: 1,    
//   stagger: 0.15,  
//   duration: 1,   
//   // ease: "power3.out",
//   ease:"power2",
 
// });

// gsap.to(".about_text2", {
//   scrollTrigger: {
//     trigger: ".about_text2",
//     start: "top 60%"
//   },
//   y: 0,         
//   opacity: 1,    
//   stagger: 0.15,  
//   duration: 1,   
//   // ease: "power3.out",
//    ease:"power2",
  
// });

// gsap.to(".about_img", {
//   scrollTrigger: {
//     trigger: ".about_img",
//     start: "top 40%"
//   },
//   y: 0,         
//   opacity: 1,    
//   stagger: 0.2,  
//   duration: 1,   
//   ease: "power2",
  
  
// });

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_wrap", 
    start: "top 60%",      
  }
});


gsap.to(".about_text", {
  scrollTrigger: {
    trigger: ".about_wrap", 
    start: "top 60%",      
  },
  y:0,
  opacity: 1,
  stagger: 0.13,
  duration: 1,
  ease:"power3.out"
})

gsap.to(".about_text2", {
  scrollTrigger: {
    trigger: ".about_wrap", 
    start: "top 60%",      
  },
  delay: 0.7,
  y: 0,
  opacity: 1,
  stagger: 0.13,
  duration: 1,
  ease:"power3.out"
}); 



$(document).ready(function () {
  const btn = $(".about_btn1 a");
  const arrow1 = $(".arrow1");
  
  btn.on("mouseenter", function () {
    gsap.to(btn, 0.4, {
      padding: "1.5rem 2.4rem",
      scale: 1.1,
      backgroundColor: "#000",
      color:"#fff",
      ease: "expo.out"
    });

    gsap.to(arrow1, 0.5, { 
      rotate: -45,       
      ease: "expo.out" 
    });
  });

  btn.on("mouseleave", function () {
    gsap.to(btn, 0.4, {
      padding: "1.3rem 2rem",
      scale: 1,
      backgroundColor: "#fff",
      color:"#F59298",
      ease: "power1.out"
    });

    gsap.to(arrow1, 0.5, {
      rotate: 0,   
      ease: "power3.out" 
    });
  });
});







// const circle1 = document.querySelector('.circle1');


//     window.addEventListener('mousemove', (event) => {
//     
//     const mouseX = event.clientX; 
//     const mouseY = event.clientY; 

//   
//     circle1.style.left = `${mouseX}px`;
//     circle1.style.top = `${mouseY}px`;
// });






// itaycode.com

// function initSimulation() {
//     const Engine = Matter.Engine,
//       Render = Matter.Render,
//       World = Matter.World,
//       Bodies = Matter.Bodies,
//       MouseConstraint = Matter.MouseConstraint,
//       Mouse = Matter.Mouse,
//       Events = Matter.Events;
  
//     const engine = Engine.create(),
//       world = engine.world;
  
//     const containerElement = document.querySelector(".tag-canvas");
//     const containerWidth = containerElement.clientWidth;
//     const containerHeight = containerElement.clientHeight;
  
//     // Set up Matter.js renderer
//     const render = Render.create({
//       element: containerElement,
//       engine: engine,
//       options: {
//         width: containerWidth,
//         height: containerHeight,
//         background: "transparent", // No default background
//         wireframes: false
//       }
//     });
  
//     Render.run(render);
//     Engine.run(engine);
  
//     // Create boundaries
//     const ground = Bodies.rectangle(
//       containerWidth / 2,
//       containerHeight + 50,
//       containerWidth,
//       100,
//       { isStatic: true }
//     );
//     const wallLeft = Bodies.rectangle(
//       -50,
//       containerHeight / 2,
//       100,
//       containerHeight,
//       {
//         isStatic: true
//       }
//     );
//     const wallRight = Bodies.rectangle(
//       containerWidth + 50,
//       containerHeight / 2,
//       100,
//       containerHeight,
//       { isStatic: true }
//     );
//     const roof = Bodies.rectangle(containerWidth / 2, -50, containerWidth, 100, {
//       isStatic: true
//     });
  
//     World.add(world, [ground, wallLeft, wallRight, roof]);
  
//     // Sync Matter.js bodies with HTML elements
//     const tags = document.querySelectorAll(".tag");
//     const tagBodies = Array.from(tags).map((tag) => {
//       const width = tag.offsetWidth;
//       const height = tag.offsetHeight;
  
//       const x = Math.random() * (containerWidth - width) + width / 2;
//       const y = Math.random() * containerHeight;
  
//       const body = Bodies.rectangle(x, y, width, height, {
//         chamfer: { radius: height / 2 }, // Rounded corners
//         density: 0.01,
//         friction: 0.1,
//         restitution: 0.8, // Bouncy effect
//         render: {
//           fillStyle: "transparent" // Disable Matter.js background rendering
//         }
//       });
  
//       World.add(world, body);
//       return { body, element: tag };
//     });
  
//     // Sync positions and rotation with Matter.js
//     Events.on(engine, "afterUpdate", () => {
//       tagBodies.forEach(({ body, element }) => {
//         const { x, y } = body.position;
  
//         element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
//       });
//     });
  
//     // Add mouse interactivity
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse: mouse,
//       constraint: {
//         stiffness: 0.2
//       }
//     });
  
//     World.add(world, mouseConstraint);
  
//     // Adjust rendering and bounds on resize
//     window.addEventListener("resize", () => {
//       render.canvas.width = containerElement.clientWidth;
//       render.canvas.height = containerElement.clientHeight;
//       render.options.width = containerElement.clientWidth;
//       render.options.height = containerElement.clientHeight;
//     });
//   }
  
//   const containerElement = document.querySelector(".tag-canvas");
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         initSimulation();
//       }
//     });
//   });
  
//   observer.observe(containerElement);
  
// })
