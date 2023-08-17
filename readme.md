[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

check is validate email, phone number and url format.

#### [Live Demo](https://jameshsu1125.github.io/lesca-validate/)

# Installation

```sh
npm install lesca-validate --save
```

## Usage

As a Node module:

```javascript
import {
  ValidateEmail,
  ValidatePhone,
  ValidateURL,
  ValidateYoutubeURL,
  ValiDateInvoice,
} from 'lesca-validate';

const email = 'username@host.com';
ValidateEmail(email); // true

const phone = '0912345678';
ValidatePhone(phone); // true

const url = 'https://google.com';
ValidatePhone(url); // true

const youtubeURL = 'https://www.youtube.com/watch?v=09839DpTctU';
ValidateYoutubeURL(youtubeURL); // '09839DpTctU';

const invoiceNumber = 'XS12345678';
ValiDateInvoice(invoiceNumber); // 'true';
```

### Features

- maintain if necessary

[ci-badge]: https://github.com/executablebooks/markdown-it-plugin-template/workflows/CI/badge.svg
[ci-link]: https://github.com/executablebooks/markdown-it--plugin-template/actions
[npm-badge]: https://img.shields.io/npm/v/markdown-it-plugin-template.svg
[npm-link]: https://www.npmjs.com/package/markdown-it-plugin-template
[github actions]: https://docs.github.com/en/actions
[github pages]: https://docs.github.com/en/pages
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[jest]: https://facebook.github.io/jest/
[rollup]: https://rollupjs.org
[npm]: https://www.npmjs.com
[unpkg]: https://unpkg.com/
