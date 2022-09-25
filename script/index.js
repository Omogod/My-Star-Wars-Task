async function main() {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    const people = data.results;
    
const app = document.getElementById('root')
const logo = document.createElement('img')
logo.setAttribute('class', 'logo')
logo.src = 'ICON.ico';
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)

    let count = 0;
        people.forEach(person => {
 
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            const h1 = document.createElement('h1')
            h1.textContent = person.name

            const pImages = document.createElement('img')
            const imgsrc = 'image';
            pImages.src = `${imgsrc}${count}.jpeg`;
            pImages.alt = person.name;
            card.appendChild(pImages);

            count++;

            
            const p = document.createElement('p')
            p.textContent = `Name: ${person.name}, Height: ${person.height}, Gender: ${person.gender}`

            card.onclick = function(){
                card.appendChild(p)
            }
 
            //toggle the onclick function to hide the info when clicked again
            card.ondblclick = function(){
                card.removeChild(p)
            }
 
 
            container.appendChild(card)
            card.appendChild(h1)
 
        })
   
    }

    main ();

    module.exports = { main }
    
 
 