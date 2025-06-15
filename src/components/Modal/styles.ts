import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const ContainerCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(4px);

  @media (max-width: 1200px) {
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 16px;
    align-items: center;
  }

  @media (max-height: 600px) {
    align-items: flex-start;
    padding-top: 20px;
  }
`

export const Card = styled.div`
  background-color: ${colors.corPrincipal};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 900px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  animation: ${slideIn} 0.4s ease-out;
  transform-origin: center;
  transition: transform 0.2s ease-out;
  max-height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  .fechar {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    span {
      display: block;
      width: 20px;
      height: 20px;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: ${colors.corSecundaria};
        top: 50%;
        left: 0;
        transition: transform 0.2s ease;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &:hover span::before {
      transform: rotate(225deg);
    }

    &:hover span::after {
      transform: rotate(135deg);
    }
  }

  @media (max-width: 1200px) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 95%;
    padding: 24px 16px;
    border-radius: 12px;
    margin: 0 auto;
  }

  @media (max-height: 600px) {
    max-height: 85vh;
    margin: 0 auto;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 20px;
  padding: 0 16px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }
`

export const Description = styled.div`
  margin-bottom: 32px;

  span::after {
    content: '';
    display: block;
    width: 64px;
    border-bottom: 3px solid ${colors.corSecundaria};
    margin-bottom: 32px;
  }

  h3 {
    font-size: 28px;
    font-weight: 600;
    color: ${colors.corSecundaria};
    position: relative;
    padding-bottom: 12px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${colors.corPrincipal};
      border-radius: 2px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: ${colors.corDoTexto};
    margin-bottom: 16px;
  }

  @media (max-width: 1200px) {
    p {
      margin-bottom: 20px;
    }

    h3::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
      padding-bottom: 10px;

      &::after {
        width: 50px;
        height: 2px;
      }
    }

    p {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`

export const Links = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  padding: 0 16px;

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    margin-top: 24px;
  }
`

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-weight: bold;
  color: ${colors.corSecundaria};
  background-color: ${colors.corPrincipal};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.5s ease;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);

  &:hover {
    background-color: ${colors.corSecundariaEscura};
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
    color: white;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 24px;
  }
`
