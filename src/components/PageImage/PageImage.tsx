import styled from 'styled-components';

interface PageImageProps {
  src: string;
  alt: string;
  speed?: string;
  className?: string;
  tone?: string;
  width?: string;
}

const PageImage = ({ src, alt, speed, className = "ukiyo", tone, width }: PageImageProps) => {
  return (
    <FlipContainer className={tone ? 'hover' : ''}>
      <Flipper>
        <Front>
          <StyledImage
            src={src}
            alt={alt}
            className={className}
            data-u-speed={speed}
            data-u-willchange
            decoding="async"
            width={width}
          />
        </Front>
      </Flipper>
    </FlipContainer>
  );
};

const FlipContainer = styled.div`
  perspective: 1000px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.hover .flipper {
    transform: rotateY(180deg);
  }
`;

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Face = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  z-index: 2;
  transform: rotateY(0deg);
`;

const Back = styled(Face)`
  transform: rotateY(180deg);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default PageImage; 