import styled from 'styled-components';

interface PageContainerProps {
  children: React.ReactNode;
  variant?: 'banner' | 'section';
  className?: string;
}

const PageContainer = ({ children, variant = 'banner', className }: PageContainerProps) => {
  return (
    <Container $variant={variant} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ $variant: 'banner' | 'section' }>`
  position: ${props => props.$variant === 'banner' ? 'absolute' : 'relative'};
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 15%;
  background-size: 100%;

  ${props => props.$variant === 'banner' 
    ? `
      inset: 0;
      background: linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 20%) 75%);
    `
    : `
      flex-direction: column;
      justify-content: center;
      background: linear-gradient(to right, rgb(0 0 0 / 100%), rgb(0 0 0 / 50%));
    `
  }
`;

export default PageContainer; 