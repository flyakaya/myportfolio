import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import { useState } from 'react';
import { useTone } from '@/hooks';
import { Tones } from '@/types';
import { Button } from '@mui/material';


const ToneToggle = () => {
  const { i18n } = useTranslation();
  const { width, height } = useWindowSize();
  const { isFunMode } = useTone();

  const [showConfetti, setShowConfetti] = useState(false);

  const toggleTone = () => {
    const newTone = isFunMode() ? Tones.PROFESSIONAL : Tones.FUN;
    const url = new URL(window.location.href);

    if (newTone === Tones.FUN) {
      url.searchParams.set('tone', Tones.FUN);
      setShowConfetti(true);
    } else {
      url.searchParams.delete('tone');
    }

    window.history.pushState({}, '', url);
    i18n.changeLanguage(newTone);
  };

  const getButtonText = () => {
    return isFunMode() ? 'Lets Be Professional' : `Open Fun Mode`;
  };

  return (
    <ToggleWrapper width={150} height={60}>
      {showConfetti &&
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={100}
          onConfettiComplete={() => setShowConfetti(false)}
        />}
      <StyledButton size="small" onClick={toggleTone} variant="contained" color="secondary" >
        {getButtonText()}
      </StyledButton>
    </ToggleWrapper>
  );
};

interface StyledProps {
  width: number;
  height: number;
}

const StyledButton = styled(Button)`
 background-color: #03A062;
     width: 100%;
`;


const ToggleWrapper = styled.div<StyledProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-top: 25px;
`;

export default ToneToggle; 