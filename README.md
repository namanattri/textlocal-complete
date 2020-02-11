# textlocal-complete

[![npm](https://img.shields.io/npm/v/textlocal-complete)](https://www.npmjs.com/package/textlocal-complete)
[![npm](https://img.shields.io/npm/dw/textlocal-complete)](https://www.npmjs.com/package/textlocal-complete)
[![install size](https://packagephobia.now.sh/badge?p=textlocal-complete)](https://packagephobia.now.sh/result?p=textlocal-complete)
[![GitHub issues](https://img.shields.io/github/issues/namanattri/textlocal-complete)](https://github.com/namanattri/textlocal-complete/issues)
[![Gitter](https://badges.gitter.im/textlocal-complete/community.svg)](https://gitter.im/textlocal-complete/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Promise based [textlocal](https://www.textlocal.in/) client for nodejs

## Installation Details

```bash
$ npm i textlocal-complete
```

## Usage

All the functions below return a Promise object.

### Send an SMS to single contact

```js
sendSms('YOUR-API-KEY', 919999999999, 'TXTLCL', 'Message');
```

### Send an SMS to multiple contacts

```js
sendSmsToMultipleNumbers(
  'YOUR-API-KEY',
  [
    /** Array of phone numbers */
  ],
  'SENDER-CODE-6-LETTERS',
  'Message matching the template',
);
```

### Bulk API

```js
sendBulk(
  'YOUR-API-KEY',
  [
    // { phoneNumber: PHONE-NUMBER, message: 'MESSAGE-TO-BE-SENT' },
  ],
  'SENDER-CODE',
);
```

### Get Balance

```js
getBalance('YOUR-API-KEY');
```

### Get Templates

```js
getTemplates('YOUR-API-KEY');
```

## License

[MIT](LICENSE)