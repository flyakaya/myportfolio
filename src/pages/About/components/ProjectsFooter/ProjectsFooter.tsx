import {
  FooterContainer,
  Content,
  H2,
} from '@/styles/commonStyles';
import { PageImage } from '@/components';
import { matrix, retrobgg } from '@/assets';
import { useTone } from '@/hooks';

const ProjectsFooter = () => {
  const { isFunMode } = useTone();

  return (
    <FooterContainer>
      <PageImage
        className={`${isFunMode() ? 'retrobgg' : 'matrix3'}`}
        src={isFunMode() ? retrobgg : matrix}
        alt="Header background"
      />
      <Content>
        <H2>Contact me</H2>
      </Content>
    </FooterContainer>
  );
};

export default ProjectsFooter; 