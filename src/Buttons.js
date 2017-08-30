import React from 'react';
import styled from 'styled-components';
import { space, typography, colors } from './variables';

// type = default, primary, danger

const DEFAULT = 'default';
const PRIMARY = 'primary';
const DANGER = 'danger';

const background = ({ type = DEFAULT }) => {
  switch (type) {
    case PRIMARY:
      return colors.blue;
    case DANGER:
      return colors.orange;
    case DEFAULT:
    default:
      return colors.white;
  }
}
const color = ({ type = DEFAULT }) => {
  switch (type) {
    case PRIMARY:
    case DANGER:
      return colors.white;
    case DEFAULT:
    default:
      return colors.black;
  }
}

const borderColor = ({ type = DEFAULT }) => {
  switch (type) {
    case PRIMARY:
    case DANGER:
      return 'transparent';
    case DEFAULT:
    default:
      return colors.black;
  }
}

const backgroundHovered = ({ type = DEFAULT }) => {
  switch (type) {
    case PRIMARY:
      return colors.blueLight;
    case DANGER:
      return colors.orange2;
    case DEFAULT:
    default:
      return colors.gray;
  }
}

const padding = ({ large = false }) => large ? '14' : '10';
const backgroundActive = ({ outline = false }) => outline ? '#75B2F2' : '#1967CC';

const Button = styled.button`
	background: ${background};
	color: ${color};
  border-width: 1px;
  border-radius: 2px;
  font-family: inherit;
  font-size: ${typography.sm}em;
  margin: 0px;
  padding: ${padding}px 16px;
  border-color: ${borderColor};
  appearance:none;
  line-height:1;
  letter-spacing: 0.05em;
  border-style: solid;
  font-weight: 400;
  transition: all 0.25s ease-in;

  &:hover:not(:disabled) {
  	background: ${backgroundHovered};
    color: 'white';
    cursor: pointer;
  }

  &:active {
  	background: ${backgroundActive};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Button>Default Button</Button>
        <p />
        <Button type="primary">Primary Button</Button>
        <p />
        <Button type="danger">Danger Button</Button>
        <p />

        <p>disabled</p>

        <Button disabled>Default Button</Button>
        <p />
        <Button disabled type="primary">Primary Button</Button>
        <p />
        <Button disabled type="danger">Danger Button</Button>
        <p />

      </div>
    )
  }
}

export default Buttons;
