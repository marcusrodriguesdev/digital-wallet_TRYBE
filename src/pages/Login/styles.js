import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: 'Roboto', sans-serif;
  background: #FFF;
  color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 100px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  justify-content: center;
  align-items: center;
  height: 390px;
  box-shadow: 0 0 1em gray;
  border-radius: 4px;

  .container-title {
    margin-bottom: 25px;
    color: #606060;
    font-weight: 600;
  }

  .Input {
    height: 52px;
    width: 304px;
    padding: 12px 25px 6px 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: solid gray 1px;
  }
`;

export const ContainerButton = styled.div`
  align-items: flex-end;
  display: flex;

  button {
    width: 304px;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    font-weight: 600;
    border: none;
    background:
      ${({ validated }) => validated ? '#2d6a4f' : '#49A47A'};
    color: white;
    font-size: 1rem;
    height: 52px;
  }

  button:hover {
    background-color: #2d6a4f;
    border-bottom: 1px solid rgb(0 0 0 / 0.2);
  }

  button:hover {
    border-bottom: 3px solid rgb(0 0 0 / 0.2);
  }
`;

export const Footer = styled.div`
  a {
  color: #606060;
  font-size: 0.7rem;
  line-height: 1.4rem;
  text-decoration: none;
  }
`;
