import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing?.(4) || '2rem'};
  text-align: center;
`;

const Home = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer maxWidth="md">
      <Box mb={4}>
        <Typography variant="h1" gutterBottom>
        {t('header.title')}
        </Typography>
        <Typography variant="h2" color="textSecondary" gutterBottom>
        A portfolio for the modern age
        </Typography>
      </Box>
      
      <Box display="flex" gap={2} justifyContent="center">
        <Button
          component={RouterLink}
          to="/posts"
          variant="contained"
          color="primary"
        >
          View Posts
        </Button>
        <Button
          component={RouterLink}
          to="/about"
          variant="outlined"
          color="secondary"
        >
          About
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default Home; 