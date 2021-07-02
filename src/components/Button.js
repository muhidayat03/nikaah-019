import styled, { keyframes } from "styled-components";

const ButtonAnimation = keyframes`
  0%   { transform: translateY(-4px); }
  50%  { transform: translateY(0px); }
  100% { transform: translateY(-4px); }
`;

const Button = styled.button`
  border: none;
  background-color: #d8b799;
  color: white;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;
  cursor: pointer;
  font-family: raleway;
  animation: ${ButtonAnimation} 3s ease infinite;

  :hover {
    background-color: #d4a274;
  }
  :disabled {
    background-color: #ccc;
  }
`;

export default Button;
