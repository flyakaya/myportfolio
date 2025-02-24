import {
  FooterContainer,
  Content,
  H2,
  H4,
} from '@/styles/commonStyles';
import { PageImage } from '@/components';
import { matrix, retrobgg } from '@/assets';
import { useTone } from '@/hooks';
import styled from 'styled-components';
import { media } from '@/styles/mediaQueries';
import ContactForm from '../ContactForm/ContactForm';
import SocialLinks from '../SocialLinks/SocialLinks';
import { useTranslation } from 'react-i18next';

const ProjectsFooter = () => {
  const { isFunMode } = useTone();
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <PageImage
        className={`${isFunMode() ? 'retrobgg' : 'matrix3'}`}
        src={isFunMode() ? retrobgg : matrix}
        alt="Header background"
      />
      <Content>
        <TitleContainer>
          <H2>{t('contact.title')}</H2>
          <ContactDescription>
          <H4>{t('contact.description')}</H4>
          </ContactDescription>
          <H4>{t('contact.description2')}</H4>
        </TitleContainer>
        <ContactSection>
          <SocialLinksContainer>
            <SocialLinks />
          </SocialLinksContainer>
          <FormContainer>
            <ContactForm />
          </FormContainer>
        </ContactSection>
      </Content>
    </FooterContainer>
  );
};

const TitleContainer = styled.div`
  margin: 24px 0;
  min-height: 120px;
`;

const ContactDescription = styled.div`
  min-height: 60px;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;

  ${media.up('md')`
    gap: 24px;
  `}
`;

const SocialLinksContainer = styled.div`
  flex: 1;
  min-width: 280px;
`;

const FormContainer = styled.div`
  flex: 2;
`;

export default ProjectsFooter; 