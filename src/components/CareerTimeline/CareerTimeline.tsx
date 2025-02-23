import i18n from '@/i18n/config';
import { H3, P } from '@/styles/commonStyles';
import { Box, Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  current: number;
}

const sliderYears: SliderYears = {
  min: 2017,
  max: 2025,
  default: 2025,
  firstCareerItem: 2017,
  secondCareerItem: 2018,
  thirdCareerItem: 2022,
  current: 2025
}

const CareerTimeline = () => {
  const isFunMode = i18n.language === 'fun';

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

  const getAchievement = (value: number): Achievement | undefined => {
    return getAchievements().find(a => a.year === value);
  }

  console.log(selectedYear, 'selectedYear')
  const valuetext = (value?: number): string => {
    console.log(value, 'valuetext');

    return value && selectedYear? String(getAchievement(selectedYear)?.year) : '';

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
            onChangeCommitted={(_event, value) => {
              console.log(value, _event, 'onChangeCommitted')
              setSelectedYear(value as number);
            }}
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
                    
              <H3>{getAchievement(selectedYear)?.year}</H3>
              <P>{getAchievement(selectedYear)?.description}</P>
            </>
          }
        </>
      }

    </Box>
  );
};

export default CareerTimeline;