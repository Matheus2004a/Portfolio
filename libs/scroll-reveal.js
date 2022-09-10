const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #about-me, #about-me section, 
    #services, #services h2, #services section .card,
    #abilities, #abilities h2,
    .education, .education h2`,
    { interval: 100 }
)