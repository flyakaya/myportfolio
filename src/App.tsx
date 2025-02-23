import { Suspense, lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '@theme/theme';
import { Header, ErrorBoundary, LoadingSpinner } from '@/components';
import { Tones } from '@/types';
import { GlobalStyles } from '@/styles/globalStyles';
import { initViewportHeight, cleanupViewportHeight } from '@/utils/viewportHeight';

// Lazy load pages for better performance
const About = lazy(() => import('@/pages/About'));
const Posts = lazy(() => import('@/pages/Posts'));

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tone = urlParams.get('tone') === Tones.FUN ? Tones.FUN : Tones.PROFESSIONAL;
      if (i18n.language !== tone) {
        i18n.changeLanguage(tone);
      }
    };

    // Initial check
    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [i18n]);

  useEffect(() => {
    initViewportHeight();
    return () => cleanupViewportHeight();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                {/* Catch all route for 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </StyledThemeProvider>
        </MuiThemeProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
