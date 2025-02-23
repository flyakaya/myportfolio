import {
  FooterContainer,
  Content,
} from '@/styles/commonStyles';
import retrobgg from '@assets/retrobgg.png';
import PageImage from '@/components/PageImage';
import i18n from '@/i18n/config';
import { matrix } from '@/assets';

const ProjectsFooter = () => {

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