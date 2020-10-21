
const links = document.querySelectorAll('.navbar a')
const nav = document.querySelector('nav')
const sections = document.querySelectorAll('section')
const home = document.querySelector('#home')
const form = document.querySelector('form') 

form.addEventListener("submit", (e) => e.preventDefault())


const selectLink = (el) =>{
    const activeLinks = document.querySelectorAll('.navbar a.selected')
    activeLinks.forEach(activeLink => activeLink.classList.remove('selected'))
    el.classList.add('selected')
}

links.forEach(link => {
    link.addEventListener('mouseover', () => link.classList.add('active'))
    link.addEventListener('mouseleave', () => link.classList.remove('active'))
    link.addEventListener('click', ()=> {
        
    selectLink(link)
})
}
)

let options = {
    threshold: 0.5

}

let homeOptions = {
    
    threshold: 0.15
}




let observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(entry => {

        if(entry.isIntersecting){   
            //console.log(entry)
            const tar = document.querySelector(`.${entry.target.id}`)
            selectLink(tar)
            window.history.pushState("", "", `/#${entry.target.id}`);
            console.log(tar)
           /*  if(entry.target.id === "menu"){
                    nav.classList.add("opaque")
                    for(let link of links){
                        link.classList.add('inverse')
                    }
            }
            else if(entry.target.id === "home"){
                
                nav.classList.remove("opaque")
                for(let link of links){
                    link.classList.remove('inverse')
                } 
            }
            */
        }
    })


}, options);

sections.forEach(section =>{
    observer.observe(section)
    }
)


let HomeObserver = new IntersectionObserver(
    function(entries, HomeObserver){
        entries.forEach(entry =>{
            
                nav.classList.toggle("opaque")
                for(let link of links){
                    link.classList.toggle("inverse")
                }
            
        })
    }
    , homeOptions
)

HomeObserver.observe(home)

