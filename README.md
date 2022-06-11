# React Native Radio Buttons Group

Simple Radio Button Component for React Native - iOS and Android

![npm](https://img.shields.io/npm/v/rn-radio-button-group) ![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/rn-radio-button-group.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/rn-radio-button-group/)

## Getting Started

###### Let's see demo

![DEMO](https://hamrocsit.com/wp-content/uploads/2022/06/rn-radio-button-group.gif)

### Installation

```bash
npm i rn-radio-button-group --save
```
or
```bash
yarn add rn-radio-button-group
```

## Usage

```
<RadioGroup
    onValueChange={(value) => setLangValue(value)}
    selectedValue={langValue}
>
    <RadioButton
        value={"green"}
        style={{ marginBottom:10 }}
        size={27}
        color="green"
    >
        <Text style={{ marginLeft:10, fontSize:18 }} >Green</Text>
    </RadioButton>
    
    <RadioButton
        value={"red"}
        style={{ marginBottom:10 }}
        size={27}
        color="red"
    >
        <Text style={{ marginLeft:10, fontSize:18 }} >Red</Text>
    </RadioButton>
    
    <RadioButton
        value={"yellow"}
        style={{ marginBottom:10 }}
        size={27}
        color="yellow"
    >
        <Text style={{ marginLeft:10, fontSize:18 }} >Yellow</Text>
    </RadioButton>
    
    <RadioButton
        value={"orange"}
        style={{ marginBottom:10 }}
        size={27}
        color="orange"
    >
        <Text style={{ marginLeft:10, fontSize:18 }} >Orange</Text>
    </RadioButton>
</RadioGroup>
```
### Props

#### RadioButton
Key | Type | Required | Default | Valid Values
--- | --- | --- | --- | --- 
value | string | yes |  | any string
disabled | boolean | no | false | true | false
onPress | function | no | | any function with paramter one accepting parameter (value)
color | string | no | #900 | any color codes
unCheckColor | string | no | `color` value | any string
size | number | no | 24 | any numeric value
thickness | number | no | 1 | any numeric value
style | object | no |  | any StyleSheet Object
checked | boolean | no | false | true | false
children | React.ReactNode | no | | React.ReactNode

#### RadioGroup
Key | Type | Required | Default | Valid Values
--- | --- | --- | --- | ---
selectedValue | string | yes | | string
onValueChange | function | yes | | any function
children | React.ReactNode | no | | React.ReactNode

## Contributions

Fork and create a pull request

## License

[MIT License](https://github.com/ThakurBallary/rn-radio-button-group/blob/master/LICENSE)