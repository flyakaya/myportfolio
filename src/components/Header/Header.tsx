import { styled } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import ToneToggle from '../ToneToggle/ToneToggle';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  boxShadow: theme.customShadows.navbar,
  height: theme.customSpacing.navbar.height,
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
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Logo to="/">{t('header.logoText')}</Logo>
          {/* <NavButton to="/posts">
            Contact
          </NavButton> */}
          <ToneToggle />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header; 