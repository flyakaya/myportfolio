import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            p: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.href = '/';
            }}
            sx={{ mt: 2 }}
          >
            Return to Home
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 