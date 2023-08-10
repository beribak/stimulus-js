import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ["form", "input", "list"]

    connect() {
    }

    getMovies(event) {
        event.preventDefault()
        this.listTarget.innerHTML = ""

        const url = `https://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            data.Search.forEach((movie) => {
                const html = `<li class="d-flex gap-2">
                                    <img src="${movie.Poster}" width="100" height="100">
                                    <h3>${movie.Title}</h3>
                              </li>`
                this.listTarget.insertAdjacentHTML('beforeend', html)  
            })
        })
    }
}

