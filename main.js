function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function navAnimations(){
    gsap.to(".navpart1 svg",{
    transform: 'translateY(-120%)',
    ScrollTrigger:{
        trigger:'#page1',
        scroller:'.main',
        markers:true,
        start:'top 0',
        end:'top -5%',
        scrub:true
    }

});
gsap.to(".navpart2 navlinks",{
    transform: 'translateY(-100%)',
    opacity: 0,
    ScrollTrigger:{
        
        trigger:'#page1',
        scroller:'.main',
        
        start:'top 0',
        end:'top -5%',
        scrub:true
    }

});
}
navAnimations();
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1 
        // gsap.to use to connect to id to which you want to select
        
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale: 0,
        opacity:0
    })
})
// dets will you about the change occur to the element

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y+100
    })
})
// to - kaha tak leke jana hai
// from - kaha se leke aana hai
gsap.from('#page1 h1', {
    y:80,
    delay:.5,
    duration:.8,
    stagger:.2, //stagger means the delay in animation of divs so one div animate first
    opacity: 0
})
gsap.from('#page1 #video-container', {
    scale: .9,
    delay:1.1,
    duration:.4,
    stagger:.2, //stagger means the delay in animation of divs so one div animate first
    opacity: 0
})

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        top:dets.y,
        left:dets.x
    })
})


// this is how you select same class for multiple divs
document.querySelectorAll('.child').forEach(function(elem)
{
    elem.addEventListener("mouseenter",function(){
        gsap.to('#cursor',{
        transform: 'translate(-50%,-50%) scale(1)'
    })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to('#cursor',{
        transform: 'translate(-50%,-50%) scale(0)'
    })

    })

})