const greeting = document.createElement('p')
greeting.textContent = document.title
greeting.style.cssText = `
    position: absolute;
    left: 50px;
    top: 100px;
    background-color: #FFF;
    border: 1px solid black;
    padding: 0.5em;
`
document.body.appendChild(greeting)
