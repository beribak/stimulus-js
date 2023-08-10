import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import HelloController from "./controllers/hello_controller.js"
Stimulus.register("hello", HelloController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)