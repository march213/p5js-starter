import p5 from 'p5'

// reload the page, otherwise canvas will be duplicate on each iteration
if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
}

import Sketch from './sketch'

new p5(Sketch, document.getElementById('app'))
