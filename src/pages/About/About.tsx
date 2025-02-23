import { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { matrix, photo, virus, disney } from '@/assets';

import { PageImage, PageContainer } from '@/components';
import { ProjectsFooter, AboutSection } from '@/pages/About/components';
import { media } from '@/styles/mediaQueries';
import { H2, H3, P } from '@/styles/commonStyles';

import { useTone } from '@/hooks';

const About = () => {
  const { t } = useTranslation();
  const { isFunMode } = useTone();

  useEffect(() => {
    // Initialize parallax
    const els = document.querySelectorAll(".ukiyo");
    els.forEach((el) => {
      // @ts-ignore (since Ukiyo is loaded via CDN)
      new Ukiyo(el);
    });
    
  }, []);

  return (
    <Container>
      <FirstScreenLayer />

      <PageImage
        src={isFunMode() ? virus : matrix}
        alt="Header background"
        className={`ukiyo ${isFunMode() ? 'virus' : 'matrix2'}`}
      />

      <PageContainer variant="banner">

        <PageOneContainer>
          <PageOneContent>
            <PageOneLeft>
              <H2>{t('header.greeting')}</H2>
              <H3>{t('header.title')}</H3>
              <P>{t('header.taglines1')}</P>
              <P>{t('header.taglines2')}</P>
              <P>{t('header.taglines3')}</P>
            </PageOneLeft>
            <FooterNote><FooterText>
              {t('header.footer')}
            </FooterText></FooterNote>
          </PageOneContent>
          <PageOneRight>
            <FlipContainer>
              <Flipper className={t('tone.current') === 'fun' ? 'flip' : ''}>
                <Front>
                  <StyledSelfImage src={photo} alt="Fulya" />
                </Front>
                <Back>
                  <StyledSelfImage src={disney} alt="Fulya" />
                </Back>
              </Flipper>
            </FlipContainer>
          </PageOneRight>
        </PageOneContainer>
      </PageContainer>
      <AboutSection />
      <ProjectsFooter />
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  background-color: #010101;
  font-family: "Euclid Circular A", "Poppins", sans-serif;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

const FirstScreenLayer = styled.header`
  height: 100vh;

  ${media.up('md')`
    height: 90vh;
  `}  

  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
    z-index: 1;
  }

  img.ukiyo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
`;


// const P = styled.p`
//   font-size: 12px;
//   line-height: 1.6;
//   opacity: 0.8;

//     ${media.up('lg')`
//   font-size: 1.2rem;
//   line-height: 1.6;
//   opacity: 0.8;
//   `}
// `;


const PageOneContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  position: relative;
  z-index: 2;
  min-height: 260px;
  backdrop-filter: blur(2px);
  background: transparent;

  ${media.up('md')`
    flex-direction: row;
    margin-top: 0;
    align-items: center;
    justify-content: space-between;
    height: auto;

  `}
`;

const FlipContainer = styled.div`
  perspective: 1000px;
  width: 200px;
  height: 200px;
`;

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  
  &.flip {
    transform: rotateY(180deg);
  }
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50%;
`;

const Front = styled(Face)`
  z-index: 2;
`;

const Back = styled(Face)`
  transform: rotateY(180deg);
`;

const StyledSelfImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const FooterNote = styled.div`
  font-size: 14px;
  opacity: 0.8;

  margin-top: 15px;

    ${media.up('lg')`
    font-size: 0.8rem;
    opacity: 0.8;
    max-width: 700px;
    min-width: 650px;
    margin-top: 100px;
  `}
`;

const PageOneContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageOneRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageOneLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 24px;
    
  ${media.up('lg')`
     max-width: 700px;
     min-width: 650px;
  `}
 
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`;

export default About; 