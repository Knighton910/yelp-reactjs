import React from 'react'
import ReactDom from 'react-dom'

const App = React.createClass({
  render: function() {
    return (<div>Text text text</div>)
  }
})

const mountNode = document.querySelector('#root')
ReactDom.render(<App /> mountNode)
