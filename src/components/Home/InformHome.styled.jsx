import styled from '@emotion/styled';

export const WrapperHome = styled.div`  
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #3470ff;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 20px;
`;



export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonForm = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 0;
  border-radius: 12px;
  background-color: green;
  outline: none;
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  margin-left: 10px;

  &:disabled {
    background-color: rgb(203, 196, 196);
    cursor: not-allowed;
  }
`;
