


export const printMovies = (data) => {
  let stuff = data.Search
  const section = document.querySelector("section")
  section.innerHTML = ""
  for (let film of stuff) {
    let title = film.Title
    let year = film.Year
    let target = film.Poster
    let billBoard = document.createElement("img")
    let titolo = document.createElement("h2")
    let anno = document.createElement("h3")
    billBoard.src = target
    titolo.innerText = title
    anno.innerText = year
    billBoard.classList.add("locandina")
    section.appendChild(titolo)
    section.appendChild(anno)
    section.appendChild(billBoard)
  }
}


