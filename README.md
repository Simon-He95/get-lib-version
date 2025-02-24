# get-lib-version

这个包是用来获取项目中具体某一个包的版本号，因为你可能是用的是 `~` 或者 `^` 这种符号，所以你可能需要一个具体的版本号，这个包就是用来解决这个问题的。

## 安装

```sh
npm install get-lib-version
```

## 使用方法

```javascript
import getLibVersion from 'get-lib-version'

const version = await getLibVersion('typescript')
console.log(version) // 输出具体的版本号，例如：4.9.5
```

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor/sponsors.png"/>
  </a>
</p>
