import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';

import { ToneToggle } from '@/components';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  boxShadow: theme.customShadows.navbar,
  height: theme.customSpacing.navbar.height,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.customSpacing.navbar.padding,
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    flexDirection: 'row',
    gap: theme.spacing(1),
  }
}));

const Logo = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  transition: theme.customTransitions.fast,
  '&:hover': {
    color: theme.palette.success.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  }
}));

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Logo to="/">{t('header.logoText')}</Logo>
        <ToneToggle />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header; 