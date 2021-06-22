async function init () {
    const node = document.querySelector("#type-text")
    var titles = ["Programmer", "Scientist", "Innovator", "Gamer", "Student", "Artist", "Writer", 
                  "Programmador", "Científico", "Innovador", "Jugador", "Estudiante", "Artista", "Escritor", 
                  "Programmateur", "Scientifique", "Innovateur", "Joueur", "Élève", "Artiste", "Écrivain" ]
    title = titles[Math.floor(Math.random() * titles.length)]
    currentTitle = title

    await sleep(1000)
    node.text = ""
    
    while (true) {
        while(title == currentTitle)
            title = titles[Math.floor(Math.random() * titles.length)]
        currentTitle = title
        await node.type(title)
        await sleep(2000)
        await node.delete(title)
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get text () {
      return this.innerText
    }
    set text (value) {
      return this.innerHTML = value
    }
    
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.text += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.text = this.text.slice(0, this.text.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  
