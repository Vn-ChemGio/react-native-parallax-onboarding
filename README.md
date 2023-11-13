# react-native-parallax-onboarding

React Native Onboarding with Parallax Effect with React Native Reanimated
## Demo

<img src="https://github.com/Vn-ChemGio/react-native-parallax-onboarding/blob/master/demo/demo.gif" width='432'/>

https://www.youtube.com/shorts/aJlDO4Kn9ik

(This example is using free assets from https://storyset.com)

## License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Installation
**Step 1:**
```sh
npm install react-native-reanimated react-native-parallax-onboarding
```

**Step 2:**
Update babel config for [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#step-2-add-reanimateds-babel-plugin)
## Usage

```js
import { ParallaxOnboarding, PageInterface } from 'react-native-parallax-onboarding';

// ...
const data: PageInterface[] = [
  {
    title: 'Samurai',
    description:
      'A durable deck featured with a menacing face of a samurai at the center of the underside accompanied with a large red sun motif.',
    source: require('./assets/onboarding-01.png'),
  },
  {
    title: 'Reject',
    description:
      "You don't have time to consider wheter the graphic on your CSS board would be considered modernist.",
    source: require('./assets/onboarding-02.png'),
  },
];

return <ParallaxOnboarding
  data = {data}
  backgroundColor={}
  headerTextStyle={}
  hideDot={false}
  onEnd={()=>{}} //function call after done onboarding
/>
```
## Example
In root directory
- Install dependencies
```sh
yarn install
```
- Run the example
```sh
yarn run example
```

## Contributing
See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
