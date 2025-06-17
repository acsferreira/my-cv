import { useState } from 'react';
import { selectLanguagesSkills } from '../../store/reducers/skills/skillsSelectors';

import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import Section from '../common/Section';
import LanguageComboBox from './LanguageCombobox';
import SkillItem from './SkillItem';
import { addLanguage } from '../../store/actions/skills';
import {
  languageLevelToPercent,
  most_spoken_languages,
} from '../../utils/constants';
import LanguageLevelSelect from './LanguageLevelSelect';

const Languages = () => {
  const dispatch = useAppDispatch();
  const languages = useAppSelector(selectLanguagesSkills);

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');

  const handleAddLanguage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLanguage) return;

    const code = most_spoken_languages
      .find(lang => lang.name === selectedLanguage)
      ?.flag.toLowerCase();

    dispatch(
      addLanguage({
        name: selectedLanguage,
        level: currentLevel,
        imgSrc: `https://flagcdn.com/w40/${code}.png`,
        title: `${setSelectedLanguage} flag`,
        type: 'language',
      })
    );

    setSelectedLanguage('');
    setCurrentLevel('');
  };

  return (
    <Section title="Languages">
      <form
        className="d-flex align-items-center gap-3 mb-2"
        onSubmit={handleAddLanguage}
      >
        <div className="col-auto">
          <LanguageComboBox
            value={selectedLanguage}
            onChange={setSelectedLanguage}
          />
        </div>
        <div className="col-auto">
          <LanguageLevelSelect
            value={currentLevel}
            onChange={setCurrentLevel}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>

      {languages.map(lang => (
        <SkillItem
          key={lang.name}
          {...lang}
          level={languageLevelToPercent[lang.level]}
        />
      ))}
    </Section>
  );
};

export default Languages;
