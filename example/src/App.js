import React, { Component } from 'react'
import Typical from 'react-typical'


const steps = [
  'Hello 👋', 1000,
  'I am react-typical', 1000,
  'I can support emoji 👌', 1000,
  'I can only delete what needs deleting', 1000,
  'I can pause', 4000,
  'I can loop', 1000,
  'I can wait', 3000,
  'I can vary typing speed', 2000,
  'Install me now', 1000,
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
