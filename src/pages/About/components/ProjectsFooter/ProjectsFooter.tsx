import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  Content,
  H2
} from '@/styles/commonStyles';
import retrobgg from '@assets/retrobgg.png';
import PageImage from '@/components/PageImage';
import { styled } from 'styled-components';
import i18n from '@/i18n/config';
import { matrix } from '@/assets';

const ProjectsFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <PageImage
         className={`${i18n.language === 'fun' ? 'retrobgg' : 'matrix3'}`}
        src={i18n.language === 'fun' ? retrobgg : matrix}
        alt="Header background"
      />
      <Content>
       todooo contact me
      </Content>
    </FooterContainer>
  );
};

export default ProjectsFooter; 