import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import CustomButton from '../../src/index';
import { jsxDecorator } from "storybook-addon-jsx";

debugger;

storiesOf("UI", module).addDecorator(jsxDecorator);
storiesOf("UI", module).add("simple", () => <CustomButton title="hamada"  />);