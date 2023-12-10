import React from 'react';
import { Header, Title, Navigation, NavigLink } from './Header.styled';

const SideBar = () => {
  return (
    <Header>
      <Title>Car Rental</Title>
      <Navigation>
        <NavigLink to="/">Home</NavigLink>
        <NavigLink to="/catalog">Catalog</NavigLink>
        <NavigLink to="/favorites">Favorites</NavigLink>
      </Navigation>
    </Header>
  );
};

export default SideBar;
