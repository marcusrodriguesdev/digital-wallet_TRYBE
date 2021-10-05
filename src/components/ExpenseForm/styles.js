import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: 'Atkinson Hyperlegible', sans-serif;
  display: flex;
  align-items: center;
  height: 55px;
  font-size: 17px;
  color: white;
  background: #252422;
  /* padding: 18px; */
  padding-left: 60px;

  .Input {
    margin-right: 15px;
    border: none;
    border-radius: 4px;
    margin-left: 5px;
    height: 25px;
    width: 70px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  .Description {
    width: 220px;
    text-align: left;
    padding: 5px;
  }

  .Select {
    margin-right: 15px;
    font-size: 14px;
    margin-left: 5px;
    border: none;
    height: 25px;
    background: #fff;
    border-radius: 4px;
  }
`;

export const Button = styled.div`
  button {
    margin-left: 15px;
    color: white;
    cursor: pointer;
    background: ${({ checkValue }) => checkValue ? '#155d27' : '#6ede8a'};
    font-weight: 600;
    height: 30px;
    width: 160px;
    border-radius: 4px;
    border: none;
  }
`;
