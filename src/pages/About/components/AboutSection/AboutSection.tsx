import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';

import {
  Content,
  H2, H3, P,
  FooterContainer
} from '@/styles';
import { sims, matrix } from '@/assets';
import PageImage from '@/components/PageImage/PageImage';
import {CareerTimeline} from '@/components';
import { useTone } from '@/hooks';

const AboutSection = () => {
  const { t } = useTranslation();
  const { isFunMode } = useTone();

  return (
    <FooterContainer>
      <PageImage
        src={isFunMode() ? sims : matrix}
        alt="Header background"
        className={`ukiyo ${isFunMode() ? 'sims' : 'matrix'}`}
      />
      <Content>
        <TitleContainer>
          <H2>{t('about.title')}</H2>
        </TitleContainer>
        <SkillsContainer>

        <P>{t('about.description1')}</P>
        <P>{t('about.description2')}</P>
        <TechicalExpContainer>
        <H3>{t('about.skills.title')}</H3>
        <P>{t('about.skills.list')}</P>
        </TechicalExpContainer>
        </SkillsContainer>
       
        <TimelineTitleContainer>
          <H2>{t('timeline.title')}</H2>
        </TimelineTitleContainer>
        <CareerTimeline />


      </Content>
    </FooterContainer>
  );
};

const SkillsContainer = styled.div`
  min-height: 420px;
`;

const TitleContainer = styled.div`
  margin-top: 12%;
`;

const TimelineTitleContainer = styled(TitleContainer)`
  margin-top: 12%;
`;

const TechicalExpContainer = styled.div`
  margin-top: 12%;
`;

export default AboutSection; 