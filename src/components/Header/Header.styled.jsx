import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green; 
  height: 80px;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;    
`;

export const Title = styled.h1`
  font-size: 35px;
  margin-right: 30px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px
`;

export const NavigLink = styled(NavLink)`
  color: black;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  padding: 16px 0;
  &.active {
    color: red;
  }
`;
