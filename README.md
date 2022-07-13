<img src="https://avatars.githubusercontent.com/u/54020604?s=200&v=4" width="120" alt="modern-icons-library" >

# [modern-icons-library](https://github.com/aexol-studio/mil)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/modern-icons-library.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/modern-icons-library

Include modern icons in your React projects easily with `modern-icons-library`, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation (for standard modern project)

```bash
yarn add modern-icons-library
# or
npm install modern-icons-library --save
```

example usage

```jsx
import { AppBinDeleteSvgrepoCom } from 'modern-icons-library';

class Question extends React.Component {
    render() {
        return <div> Lets go for a <AppBinDeleteSvgrepoCom />? </div>
    }
}
```

*NOTE*: each Icon has it's own component under `modern-icons-library` you import from.


example usage

```jsx
import { SvgCameraHipsterOnTrendSvgrepoCom } from 'modern-icons-library';
class Question extends React.Component {
  render() {
    return <div> Lets go for a <SvgCameraHipsterOnTrendSvgrepoCom />? </div>
  }
}
```

