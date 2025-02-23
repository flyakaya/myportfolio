import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      card: string;
      button: string;
      navbar: string;
    };
    customTransitions: {
      fast: string;
      slow: string;
    };
    customBorders: {
      radius: {
        sm: string;
        md: string;
        lg: string;
      };
    };
    customSpacing: {
      navbar: {
        height: number;
        padding: number;
      };
      container: {
        padding: {
          mobile: number;
          desktop: number;
        };
      };
    };
  }
  interface ThemeOptions {
    customShadows?: {
      card?: string;
      button?: string;
      navbar?: string;
    };
    customTransitions?: {
      fast?: string;
      slow?: string;
    };
    customBorders?: {
      radius?: {
        sm?: string;
        md?: string;
        lg?: string;
      };
    };
    customSpacing?: {
      navbar?: {
        height?: number;
        padding?: number;
      };
      container?: {
        padding?: {
          mobile?: number;
          desktop?: number;
        };
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#03A062',
      light: '#4caf50',
      dark: '#028555',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1c1c1c',
      secondary: '#666666',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
  },
  // Custom theme extensions
  customShadows: {
    card: '0 2px 4px rgba(0,0,0,0.1)',
    button: '0 1px 3px rgba(0,0,0,0.12)',
    navbar: '0 2px 8px rgba(0,0,0,0.08)',
  },
  customTransitions: {
    fast: 'all 200ms ease-in-out',
    slow: 'all 300ms ease-in-out',
  },
  customBorders: {
    radius: {
      sm: '4px',
      md: '8px',
      lg: '16px',
    },
  },
  customSpacing: {
    navbar: {
      height: 64,
      padding: 16,
    },
    container: {
      padding: {
        mobile: 16,
        desktop: 24,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#03A062', 
          textTransform: 'none',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          '&:hover': {
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          height: 64,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#03A062',
          height: 8,
          '& .MuiSlider-markLabel': {
            padding: 0,
            fontSize: '1rem',
            color: '#ffffff',
            '@media (max-width: 600px)': {
              display: 'none', // Hides on small screens
            },
            '&.MuiSlider-markLabelActive': {
              color: '#03A062',
            },
          },
          '& .MuiSlider-valueLabel': {
            fontSize: '0.75rem',
            maxWidth: 220,
            whiteSpace: 'pre-line',
            textAlign: 'center'
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '16px',
          },
          '@media (min-width:601px)': {
            padding: '24px',
          },
        },
      },
    },
  },
}); 