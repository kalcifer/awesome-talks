import { Link } from 'preact-router/match'
import styled from 'styled-components'
import remcalc from 'remcalc'

export default styled(Link)`
  background-color: ${props => props.theme.primary};
  border: ${remcalc(1)} solid ${props => props.theme.blue};
  padding: ${remcalc(6)} ${remcalc(15)};
  color: ${props => props.theme.blue};
  border-radius: ${remcalc(5)};
  transition: all 300ms ease-in-out;
  margin: ${remcalc(5)};
  text-decoration: none;

  &:after {
    width: 0;
    height: 0;
  }

  &:hover {
    border: ${remcalc(1)} solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    background: ${props => props.theme.blue};
  }
`
