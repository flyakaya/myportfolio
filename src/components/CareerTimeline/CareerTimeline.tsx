import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Slider } from '@mui/material';

import { P } from '@/styles/commonStyles';
import { useTone } from '@/hooks';

type Achievement = {
  year: number;
  description: string;
  industry?: string;
  id: string;
};

type SliderYears = {
  min: number;
  max: number;
  default: number;
  firstCareerItem: number;
  secondCareerItem: number;
  thirdCareerItem: number;
  fourthCareerItem: number;
  current: number;
}

const sliderYears: SliderYears = {
  min: 2017,
  max: 2025,
  default: 2025,
  firstCareerItem: 2017,
  secondCareerItem: 2018,
  thirdCareerItem: 2022,
  fourthCareerItem: 2024,
  current: 2025
}

const CareerTimeline = () => {
  const { isFunMode } = useTone();

  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState<number>(sliderYears.default);

  useEffect(() => {
    setSelectedYear((oldyYear) => {
      return oldyYear ?? sliderYears.default
    })
  }, [isFunMode])

  const getAchievements = (): Achievement[] => {
      const achievements: Achievement[] = [
        {
          "id": 'firstCareerItem',
          "year": sliderYears.firstCareerItem,
          "description": t('timeline.firstCareerItem'),
        },
        {
          "id": 'secondCareerItem',
          "year": sliderYears.secondCareerItem,
          "description": t('timeline.secondCareerItem'),
        },
        {
          id: 'thirdCareerItem',
          "year": sliderYears.thirdCareerItem,
          "description": t('timeline.thirdCareerItem'),
        },

        {
          id: 'fourthCareerItem',
          "year": sliderYears.fourthCareerItem,
          "description": t('timeline.fourthCareerItem'),
        },
        {
          id: 'current',
          "year": sliderYears.current,
          "description": t('timeline.current'),
        }
      ];

      return achievements;
  }


  const getTooltipContent = (value: number): string => {
    const achievement = getAchievements().find(a => a.year === value);
    if (!achievement) return '';

    return `
    ${achievement.year}
  `;
  };

  const getAchievement = (value: number): Achievement | undefined => getAchievements().find(a => a.year === value);

  const valuetext = (value?: number): string => value && selectedYear? String(getAchievement(selectedYear)?.year) : ''

  const handleOnChangeCommitted = (_event:React.SyntheticEvent | Event, value: number | number[]) => {
    setSelectedYear(value as number);
  };

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 800,
      minHeight:400,
    }}>
      {sliderYears &&
        <>
          <Slider
            color="secondary"
            aria-label="Career Timeline"
            defaultValue={sliderYears.default}
            getAriaValueText={valuetext}
            onChangeCommitted={handleOnChangeCommitted}
            valueLabelFormat={getTooltipContent}
            step={null}
            marks={getAchievements()?.map(a => ({
              value: a.year,
              label: a.year === 2025 ? 'Currently' : a.year.toString()
            }))}
            min={sliderYears.min}
            max={sliderYears.max}
          />
          {selectedYear &&
            <>
                    
              <p>{getAchievement(selectedYear)?.year}</p>
              <P>{getAchievement(selectedYear)?.description}</P>
            </>
          }
        </>
      }

    </Box>
  );
};

export default CareerTimeline;