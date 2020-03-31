import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      colorSelector: "#F00"
    }
  }


  colorSelectorchangetrack = (newColor) => {
    this.setState({
      colorSelector: newColor 
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} otherChildColor = {this.state.colorSelector} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector colorchange = {this.colorSelectorchangetrack}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}