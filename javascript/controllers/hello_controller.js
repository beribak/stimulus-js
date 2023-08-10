import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ['helloText']

    connect() {
      console.log(this.helloTextTarget)
    }
    
    sayHello() {
        this.helloTextTarget.classList.remove("d-none")
    }
}