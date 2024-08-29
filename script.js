var tl = gsap.timeline ()

tl.from ("#nav h1" , {
    y: -20,
    duration: 1,
    opacity: 0,
})

tl.from ("#nav h2", {
    y: -20,
    duration: 0.7,
    opacity: 0,
})

tl.from ("#nav a", {
    y: -20,
    duration: 0.6,
    opacity: 0,
})

gsap.from ("#fanta h1" , {
    y: 30,
    duration: 1,
    opacity : 0,
    scale : 0.2
})