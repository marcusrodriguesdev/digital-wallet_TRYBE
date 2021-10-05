import styled from 'styled-components';

export const Container = styled.table`
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  height: 80vh;
  background: #fff;
`;

export const TableHeader = styled.thead`
  height: 50px;
  font-weight: 600;
  display: flex;
  width: 100%;
  color: white;
  /* margin-left: 73px; */
  background: #403d39; 
  align-items: center;

  tr {
    display: flex;
    margin-left: 37px;
  }

  div {
    margin: 20px;
  }
`;

export const BodyTable = styled.tbody`
  background: #fffcf2;
`;
