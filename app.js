document.querySelector(".card").forEach(card=>{
    card.addEventListerner("mousemode",e=>{
        const rect= card.getBoundingClientRect()

        // update css variable for the spotlight effect

        card.style.setProperty("--x",`${e.clientX-rect.left}px`)

        card.style.setProperty("--y",`${e.clientY-rect.left}px`)
    })

})