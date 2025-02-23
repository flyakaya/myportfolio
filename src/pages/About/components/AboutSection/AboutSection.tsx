import { useTranslation } from 'react-i18next';
import {
  SectionContainer,
  Content,
  H2, H3, P,
  FooterContainer
} from '@/styles';
import sims from '@assets/simsbg.jpg';
import PageImage from '@/components/PageImage/PageImage';
import i18n from '@/i18n/config';
import matrix from '@assets/matrix.jpg';
import CareerTimeline from '@/components/CareerTimeline';
import { styled } from 'styled-components';
import { media } from '@/styles/mediaQueries';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <PageImage
        src={i18n.language === 'fun' ? sims : matrix}
        alt="Header background"
        className={`ukiyo ${i18n.language === 'fun' ? 'sims' : 'matrix'}`}
      />
      <Content>
        <TitleContainer>
          <H2>{t('about.title')}</H2>
        </TitleContainer>
        <P>{t('about.description1')}</P>
        <P>{t('about.description2')}</P>
        <H3>{t('about.skills.title')}</H3>
        <P>{t('about.skills.list')}</P>
        <TimelineTitleContainer>
          <H2>{t('timeline.title')}</H2>
        </TimelineTitleContainer>
          <CareerTimeline />


      </Content>
    </FooterContainer>
  );
};

const TitleContainer = styled.div`
margin: 24px 0;
`;

const TimelineTitleContainer = styled(TitleContainer)`
  margin-top: 15%;
`;
export default AboutSection; 