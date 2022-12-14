import * as React from 'react';
import { AppBar, styled, Toolbar } from '@mui/material';
import NavigationMenu from '../molecules/NavigationMenu';
import AccountMenu from '../molecules/AccountMenu';

const NavigationBar = () => {
  return (
    <NavBox>
      <ToolBar>
        <NavigationMenu />
        <AccountMenu />
      </ToolBar>
    </NavBox>
  );
};

export default NavigationBar;

const NavBox = styled(AppBar)(() => ({
  boxShadow: 'none'
}));

const ToolBar = styled(Toolbar)(() => ({
  backgroundColor: '#fff',
  borderBottom: '1px solid #00000033',
  justifyContent: 'space-between',
}));