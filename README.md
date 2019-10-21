# react-typical - [DEMO](https://catalinmiron.github.io/react-typical/)

![React Typical](react-typical.gif)

> React Animated typing in ~400 bytes 🐡 of JavaScript.

Based on awesome typical library by [@camwiegert](https://github.com/camwiegert/typical)

[![NPM](https://img.shields.io/npm/v/react-typical.svg)](https://www.npmjs.com/package/react-typical) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-typical
```

## Usage

```jsx
import React, { Component } from 'react'
import Typical from 'react-typical'

class Example extends React.Component {
  render () {
    return (
      <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}
```

## Properties

prop|mandatory|type|Eg.
|--|--|--|--|
|`steps`|yes|[]|`['Hello', 1000, 'World']`
|`wrapper`|no|string|'p'
|`loop`|no|number|`3`|


## License

This library is based on [@camwiegert/typical](https://github.com/camwiegert/typical) work and it currently is just a wrapper for react.

MIT © [catalinmiron](https://github.com/catalinmiron)
