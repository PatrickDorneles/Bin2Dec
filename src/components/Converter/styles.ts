import styled, { keyframes } from "styled-components";

const containerShow = keyframes`
  0% {
    display: none;
    filter: opacity(0%);
  }

  1% {
    display: flex;
    filter: opacity(0%);
  }

  100% {
    display: flex;
    filter: opacity(100%);
  }
`;

export const ConverterContainer = styled.div`
    transform: translateY(20px);
    display: flex;
    flex-direction: column;

    gap: 50px;

    animation: ${containerShow} 0.5s;
`;

export const Label = styled.label`
    display: flex;

    color: #ffffff;

    flex-direction: column;
    align-items: center;

    font-family: RobotoMono;
    
`;

export const Input = styled.input`
    background-color: transparent;
    border: transparent;

    color: #ffffff;

    outline: none;
    font-family: RobotoMono;

    font-size: 4.5em;
    text-align: center;

    margin: 20px;
    text-overflow: ellipsis;
`;
