// https://github.com/styled-components/styled-components/issues/793#issuecomment-356559057

import remcalc from 'remcalc'
import { Children } from 'react'
import { withTheme, injectGlobal } from 'styled-components'

const Global = ({ theme, children }) => {
  injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    font-size: ${remcalc(14)};
    color: #666;
    letter-spacing: ${remcalc(0.11)};
    line-height: ${remcalc(21)};
    padding-bottom: ${remcalc(40)};
    background-color: ${theme.primary};
  }

  div[id*='do-not-delete-this-hack'] {
    display: none;
  }

  a {
    color: ${theme.blue};
    text-decoration: none;
    padding-bottom: ${remcalc(2)};
    border-bottom: ${remcalc(2)} solid ${theme.blue};
    position: relative;
    padding: ${remcalc(5)};
    opacity: 0.8;
    font-wheight: 300;
    letter-spacing: ${remcalc(0.09)};
    text-align: left;
    line-height: ${remcalc(21)};;
    cursor: pointer;
    transition: color 200ms ease;

    &.no-hover {
        line-height: 1.8;
        &:hover {
            color: ${theme.blue};
        }
        &:after {
            display: none;
        }
    }

    span {
      position: relative;
      z-index: 10;
    }

    @media (pointer: fine) {
      &:after {
        transition: height 200ms ease;
        content: '';
        width: 100%;
        height: 0;
        background: ${theme.blue};
        display: block;
        position: absolute;
        bottom: 0;
        z-index: 0;
      }

      &:hover {
        color: ${theme.primary};

        &:after {
          height: 100%;
        }
      }
    }
  }

  .search-input {
    border: 0 none;
    border-bottom: ${remcalc(1)} solid ${theme.tertiary};
    height: ${remcalc(36)};
    line-height: 1.4;
    padding: ${remcalc(4)} ${remcalc(6)};
    box-sizing: border-box;
    font-size: ${remcalc(16)};
    margin-right: ${remcalc(20)};
    transition: border 250ms ease;
    outline: none;
    color: ${props => props.theme.main}
    background: ${props => props.theme}

    &:hover,
    &:focus {
        border-bottom-color: ${theme.blue};
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`
  return Children.only(children)
}

export default withTheme(Global)
