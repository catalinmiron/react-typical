import React, { Component } from 'react'
import Typical from 'react-typical'


const steps = [
  'Hello 👋', 2000,
  'I am react-typical', 2000,
  'I can support emoji 👌', 2000,
  'I can only delete what needs deleting', 2000,
  'I can pause', 4000,
  'I can loop', 2000,
  'I can wait', 3000,
  'I can vary typing speed', 2000,
  'npm install --save react-typical'
];
export default class App extends Component {
  render () {
    return (
      <div>
        <Typical wrapper="span" steps={steps} loop={1} className={'caca'} />
      </div>
    )
  }
}
