import styled from 'styled-components';

const Container = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: 'Atkinson Hyperlegible', sans-serif;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 65px;
  background: #252422;
  font-size: 17px;
  color: white;
  font-weight: 500;

  .icon {
    margin-top: 5px;
    margin-left: 10px;
  }
`;

export default Container;
