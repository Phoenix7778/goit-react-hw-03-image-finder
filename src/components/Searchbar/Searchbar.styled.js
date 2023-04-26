import styled from 'styled-components';

export const SearchForm = styled.form`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  background: linear-gradient(to right, #0057b7, #ffd700);
`;

export const SearchFormInput = styled.input`
  padding: 5px 20px;
  width: 40%;
  line-height: 1.5;
  font-size: 1.1em;
  border-radius: 5px;
  border: none;

  &::placeholder {
    color: gray;
    font-size: 0.9em;
  }

  &:focus,
  &:hover {
    outline: none;
  }
`;

export const SearchFormButton = styled.button`
  margin-left: 20px;
  width: auto;
  padding: 5px 20px;

  line-height: 1.5;
  font-size: 0.9em;

  background-color: #0057b7;
  color: white;
  border-radius: 15px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffd700;
    color: black;
    cursor: pointer;
  }
`;
