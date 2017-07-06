# react-drip-form-components

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-drip-form-components.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-drip-form-components)
[![Codecov](https://img.shields.io/codecov/c/github/tsuyoshiwada/react-drip-form-components.svg?style=flat-square)](https://codecov.io/gh/tsuyoshiwada/react-drip-form-components)
[![npm version](https://img.shields.io/npm/v/react-drip-form-components.svg?style=flat-square)](http://badge.fury.io/js/react-drip-form-components)

> Official UI Components for [react-drip-form](https://github.com/tsuyoshiwada/react-drip-form). styling by [styled-components](https://github.com/styled-components/styled-components).

https://tsuyoshiwada.github.io/react-drip-form-components/




## Table of Contents

* [DEMO](#demo)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [API](#api)
  * [shouldDisplayError](#shoulddisplayerror)
  * [shouldDisplaySpinner](#shoulddisplayspinner)
  * [Checkbox](#checkbox)
  * [Input](#input)
  * [Radio](#radio)
  * [Select](#select)
  * [Textarea](#textarea)
  * [FieldGroup](#fieldgroup)
* [Customize Theme](#customize-theme)
* [Related projects](#related-projects)
* [Contribute](#contribute)
* [License](#license)




## DEMO

[![Screenshot](https://raw.githubusercontent.com/tsuyoshiwada/react-drip-form-components/artwork/demo-screenshot.png)](https://tsuyoshiwada.github.io/react-drip-form-components/)

See [Live Demo](https://tsuyoshiwada.github.io/react-drip-form-components/).




## Getting Started


### Installation

[react-drip-form](https://github.com/tsuyoshiwada/react-drip-form) must also be installed.

```bash
$ npm install --save react-drip-form
$ npm install --save react-drip-form-components
```


### Usage

```javascript
import React from 'react';
import { dripForm } from 'react-drip-form';
import {
  Checkbox,
  FieldGroup,
  Input,
  Radio,
  Select,
  Textarea,
} from 'react-drip-form-components';

export default dripForm({/* form options */})(({ handlers }) => (
  <form onSubmit={handlers.onSubmit}>
    {/* Input field */}
    <Input name="username" type="text" />

    {/* Select field */}
    <Select name="color">
      <option value="#fff">White</option>
      <option value="#ccc">Gray</option>
      <option value="#000">Black</option>
    </Select>

    {/* Checkbox with FieldGroup field */}
    <FieldGroup name="library" multiple>
      <Checkbox value="react">React</Checkbox>
      <Checkbox value="angular">Angular</Checkbox>
      <Checkbox value="vue">Vue</Checkbox>
    </FieldGroup>

    {/* Radio with FieldGroup field */}
    <FieldGroup name="gender">
      <Radio name="female">Female</Radio>
      <Radio name="male">Male</Radio>
      <Radio name="other">Other</Radio>
    </FieldGroup>

    {/* Textarea field */}
    <Textarea name="message" />

    {/* Checkbox only */}
    <Checkbox name="confirm" value="yes">
      I agree to the <a href="/foo/bar/">Terms of Use</a>
    </Checkbox>

    <button type="submit" onClick={handlers.onSubmit}>Submit</button>
  </form>
));
```

For actual use, [demo/components/SampleForm.js](./demo/components/SampleForm.js) source code may be helpful!




## API

The APIs listed below are proprietary properties other than the field properties of [react-drip-form](https://github.com/tsuyoshiwada/react-drip-form).  
Please refer to the [document](https://tsuyoshiwada.github.io/react-drip-form/docs/api/drip-form-field/) for `react-drip-form` field properties.


### shouldDisplayError

This function accepts the properties of the field and makes a decision whether to display an error.  
If you want to display an error you need to return `true`.

By default the following code is used.

```javascript
({ meta }) => !!(meta.error && meta.dirty && meta.touched)
```


### shouldDisplaySpinner

This function determines the display of the spinner used for asynchronous verification and so on.  
If you want to display a spinner you need to return `true`.

By default the following code is used.

```javascript
({ meta }) => meta.validating
```


### Checkbox

It is a component that wraps `type="checkbox"` with `dripFormField()`.

| key                    | description                                        |
|:-----------------------|:---------------------------------------------------|
| `children`             | Child element to display on label.                 |
| `disabled`             | Specify whether the field is disabled.             |
| `shouldDisplayError`   | ref: [shouldDisplayError](#shoulddisplayerror)     |
| `shouldDisplaySpinner` | ref: [shouldDisplaySpinner](#shoulddisplayspinner) |


### Input

It is a component that wraps `input` with `dripFormField()`. mainly used for text control.

| key                    | description                                                                        |
|:-----------------------|:-----------------------------------------------------------------------------------|
| `type`                 | Specify an InputType other than `checkbox` and` radio`. (`Text` or `email` etc...) |
| `disabled`             | Specify whether the field is disabled.                                             |
| `shouldDisplayError`   | ref: [shouldDisplayError](#shoulddisplayerror)                                     |
| `shouldDisplaySpinner` | ref: [shouldDisplaySpinner](#shoulddisplayspinner)                                 |


### Radio

It is a component that wraps `type="radio"` with `dripFormField()`.

| key                    | description                                        |
|:-----------------------|:---------------------------------------------------|
| `children`             | Child element to display on label.                 |
| `disabled`             | Specify whether the field is disabled.             |
| `shouldDisplayError`   | ref: [shouldDisplayError](#shoulddisplayerror)     |
| `shouldDisplaySpinner` | ref: [shouldDisplaySpinner](#shoulddisplayspinner) |


### Select

It is a component that wraps `select` with `dripFormField()`.

| key                    | description                                                                   |
|:-----------------------|:------------------------------------------------------------------------------|
| `children`             | Specify the `<option>` element.                                               |
| `multiple`             | Whether multiple selection is enabled or not. Specify `true` if it is enable. |
| `disabled`             | Specify whether the field is disabled.                                        |
| `shouldDisplayError`   | ref: [shouldDisplayError](#shoulddisplayerror)                                |
| `shouldDisplaySpinner` | ref: [shouldDisplaySpinner](#shoulddisplayspinner)                            |


### Textarea

It is a component that wraps `textarea` with `dripFormField()`.

| key                    | description                                        |
|:-----------------------|:---------------------------------------------------|
| `disabled`             | Specify whether the field is disabled.             |
| `shouldDisplayError`   | ref: [shouldDisplayError](#shoulddisplayerror)     |
| `shouldDisplaySpinner` | ref: [shouldDisplaySpinner](#shoulddisplayspinner) |


### FieldGroup

It is a component wrapped in `dripFormGroup()`.

| key                  | description                                    |
|:---------------------|:-----------------------------------------------|
| `children`           | Specify the enclosing child element.           |
| `shouldDisplayError` | ref: [shouldDisplayError](#shoulddisplayerror) |




## Customize Theme

You can customize the theme by using `extendTheme` as follows.

```javascript
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { extendTheme } from 'react-drip-form-components';

const originalTheme = {
  /* ... Your theme variables */

  // The `rdf` namespace is the theme of `react-drip-form`.
  rdf: extendTheme({
    /* Specify a custom theme here */
  }),
};

export default () => (
  <ThemeProvider theme={originalTheme}>
    {/* Here is your components. */}
  </ThemeProvider>
);
```

See [src/theme.js](./src/theme.js) for customizable variables.




## Related projects

* [tsuyoshiwada/react-drip-form](https://github.com/tsuyoshiwada/react-drip-form)




## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-drip-form-components/issues).




## License

[MIT © tsuyoshiwada](./LICENSE)

