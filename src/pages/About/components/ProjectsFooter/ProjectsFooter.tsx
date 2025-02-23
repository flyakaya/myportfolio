import {
  FooterContainer,
  Content,
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
        todooo contact me
      </Content>
    </FooterContainer>
  );
};

export default ProjectsFooter; 