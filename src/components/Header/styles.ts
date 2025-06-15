import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  background-color: ${colors.corPrincipal};
  border-bottom: 1px solid ${colors.corSecundaria};
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`

export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  width: 30px;
  justify-content: space-between;
  height: 20px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    background: ${colors.corSecundaria};
    border-radius: 3px;
  }

  @media (max-width: 1200px) {
    display: flex;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  ul {
    display: flex;
  }

  li {
    display: inline;
    padding-left: 16px;
  }

  @media (max-width: 1200px) {
    display: block;
    width: 100%;
    padding: 0;

    ul {
      display: block;
    }

    .desktop {
      display: none;
    }

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 24px;
    }

    nav {
      height: 100vh;
      display: block;
      text-align: center;
      margin-top: 64px;
      animation: slideDown 0.3s ease-in-out;
      background-color: ${colors.corPrincipal};

      li {
        width: 100%;
        display: block;
        padding: 0;
        border-bottom: 1px solid ${colors.corSecundaria};
        transition: all 0.3s ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .menu {
      margin: 0 62px;
    }

    nav {
      margin-top: 48px;

      a {
        padding: 32px;
      }

      li {
        padding: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .menu {
      margin: 0 32px;
    }
  }
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: ${colors.corSecundaria};
  font-size: 1.8rem;
`

export const Links = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  color: ${colors.corSecundaria};
  font-family: 'Blinker', sans-serif;
  position: relative;
  display: block;
  width: 100%;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.corSecundaria};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${colors.corSecundaria};
    opacity: 0.8;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
