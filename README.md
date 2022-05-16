# ToDo React APP

This is a To Do app made with React, it is mainly structured with Chakra UI and Bootstrap.
We have a adding task section and a view section to see and interact with our tasks.

## Content

This proyect has a simple estructure in wich we have 3 principal folders:

- node_modules
- public
- src

The first folder are our needed folders they stablished with react, and in case we add a new package the module will be installed in the node_modules folder.

### SRC folder

For the src folder we have:

- Components
- models
- styles

Here is stablished our proyect, in components we will see the father and child components.
For the models we will se js scripts for modeling the data needed
For styles we have simple styles for our tasks elements

## Demo

If you want to see the demo of this proyect deployed, you can visit [Demo of the proyect](https://anabelisa.co/tips-para-hacer-un-buen-readme-md/)

## Pre-requirements

The proyect mainly uses React framework, but it was also installed a few estra packages.
In case yop needed I suggest to install the next libraries:

#### SASS

    npm i --save node-sass

#### Chakra-ui

    npm i --save @chakra-ui/react @chakra-ui/theme @chakra-ui/theme-tools react-icons

#### Bootstrap

    npm i --save bootstrap bootstrap bootstrap-icons

## Installation

To run this proyect just type and execute

```bash
npm  start
```

## Preview

![](/darkPreview.png)
![](/wPreview.png)

### Notes

It´s importante to teel that almost all styles like dark theme, postion, etc., was declared with
Chakra UI library, so many elements will have stablished the style with props in the labels like
this:
<example colorScheme='green' ></example>

In a few ones you will see a prop like this:

    colorSchemE={['green', 'green', 'green', 'red']}

this is a prop to established responsive design, in the first three breakpoint we have green color,
from 4th break will be red, Chakra UI stablished breakpoint based in bootstrap.

To see the complete documentation of this folow the next link:
[Chakra-ui](https://chakra-ui.com/docs/styled-system/features/responsive-styles)
