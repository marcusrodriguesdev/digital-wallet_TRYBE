import styled from 'styled-components';

export const Container = styled.table`
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  margin: 0;
  border-spacing: 0;

  tr {
    border-spacing: 0;
  }

  th {
    width: 10%;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: #403d39; 
  }

  td {
    font-size: 16px;
    width: 10%;
    border-spacing: 0;
    /* border: 1px solid black; */
    padding: 10px 20px;
    text-align: center;
    color: black;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: 30px;
  border-radius: 3px;
  width: 90px;
  border: none;
  background: #e5383b;
  color: white;
`;
