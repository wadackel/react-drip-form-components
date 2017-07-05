# react-drip-form-components

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-drip-form-components.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-drip-form-components)
[![Codecov](https://img.shields.io/codecov/c/github/tsuyoshiwada/react-drip-form-components.svg?style=flat-square)](https://codecov.io/gh/tsuyoshiwada/react-drip-form-components)
[![npm version](https://img.shields.io/npm/v/react-drip-form-components.svg?style=flat-square)](http://badge.fury.io/js/react-drip-form-components)

> Official UI Components for [react-drip-form](https://github.com/tsuyoshiwada/react-drip-form). styling by [styled-components](https://github.com/styled-components/styled-components).

https://tsuyoshiwada.github.io/react-drip-form-components/




## Table of Contents

* [DEMO](#demo)
* [Install](#install)
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

![Screenshot](todo)

See [Live Demo](https://tsuyoshiwada.github.io/react-drip-form-components/).




## Install

```bash
$ npm install --save react-drip-form-components
```

Import the component as follows:

```javascript
import {
  Checkbox,
  FieldGroup,
  Input,
  Radio,
  Select,
  Textarea,
} from 'react-drip-form-components';
```




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

| key                    | description                                        |
|:-----------------------|:---------------------------------------------------|
| `disabled`             | Specify whether the field is disabled.             |
| `shouldDisplayError`   | ref: [shouldDisplayError](#shoulddisplayerror)     |
| `shouldDisplaySpinner` | ref: [shouldDisplaySpinner](#shoulddisplayspinner) |


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

todo



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

