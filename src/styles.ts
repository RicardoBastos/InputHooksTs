import styled from "styled-components";

export const ContainerInput = styled.div`
  outline: none;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding-top: 20px;
  color: #333;
  display: flex;
  align-items: center;
  position: relative;
  &:focus-within {
    border-bottom: 2px solid #1976d2;
  }
  label {
    pointer-events: none;
    position: absolute;
    top: 18px;
    transition: all 0.3s ease-out;
  }
  input {
    flex: 1;
    background: transparent;
    color: #333;
    outline: none;
    border: 0;
    font-size: 16px;
    &:required:invalid + label:after {
      content: " *";
    }
    &:focus + label,
    :not(:placeholder-shown) + label {
      top: 0;
      color: #1976d2;
    }
  }
  button {
    background: transparent;
    border: 0;
    color: #999;
    outline: none;
    cursor: pointer;
  }
`;

