function revealTospan(){
document.querySelectorAll(".reveal")
    .forEach(function(elem){
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML =elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
});
}

function valuesetters(){
    gsap.set("#nav",{y:"-100%",opacity:0});
    gsap.set("#home span .child",{y:"100%"});
}

function loaderanimate(){
    var t2 = gsap.timeline();
t2
.from("#loader .child span",{
    x:100,
    delay:1,
    stagger:.2,
    duration:1.4,
    ease:Power3.easeInOut
})

.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut
});

t2.to("#loader",{
    height:0,
    duration:2,
    ease:Circ.easeInOut
});

t2.to("#green",{
    height:"100%",
    top:0,
    duration:2,
    delay:-.8,
    ease:Circ.easeInOut
});

t2.to("#green",{
    height:"0%",
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }
})
}

function animateHomepage(){
    gsap.set("#nav a",{y:"-100%",opacity:4});
    gsap.set("#home span .child",{y:"100%"});

    var t1= gsap.timeline()
    t1.to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
    });
    
    t1.to("#home .parent .child",{
        y:0,
        stagger:.1,
        duration:2,
        ease:Ease.easeInOut
    });
}

revealTospan();
valuesetters();
loaderanimate();





