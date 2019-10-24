# react-typical
> React Animated typing in ~400 bytes 🐡 of JavaScript.

[DEMO](https://catalinmiron.github.io/react-typical/)

![React Typical](react-typical.gif)

Based on awesome typical library by [@camwiegert](https://github.com/camwiegert/typical)

[![NPM](https://img.shields.io/npm/v/react-typical.svg)](https://www.npmjs.com/package/react-typical) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![React-Typical - Animated typing without the headaches](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=172069&theme=dark)](https://www.producthunt.com/posts/react-typical?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-typical)

### Youtube Video Tutorial

[![react-typing-indicator-thumbnail-v2](https://user-images.githubusercontent.com/2805320/67524081-53ac7980-f6b0-11e9-9fb3-ea7a68f98d96.png)](https://www.youtube.com/watch?v=t7ePHIsKnnI)

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
