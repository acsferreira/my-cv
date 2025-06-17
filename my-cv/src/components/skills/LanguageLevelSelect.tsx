import React from 'react';
import Select from 'react-select';

type OptionType = { value: string; label: string };

const levels: OptionType[] = [
  { value: 'A1', label: 'A1 – Beginner' },
  { value: 'A2', label: 'A2 – Elementary' },
  { value: 'B1', label: 'B1 – Intermediate' },
  { value: 'B2', label: 'B2 – Upper Intermediate' },
  { value: 'C1', label: 'C1 – Advanced' },
  { value: 'C2', label: 'C2 – Proficient' },
];

interface LanguageLevelSelectProps {
  value: string;
  onChange: (selectedOption: string) => void;
}

const LanguageLevelSelect: React.FC<LanguageLevelSelectProps> = ({
  value,
  onChange,
}) => {
  const selectedOption = levels.find(option => option.value === value) || null;

  return (
    <Select<OptionType>
      options={levels}
      value={selectedOption}
      onChange={option => onChange(option ? option.value : '')}
      placeholder="Select language level"
      isClearable
    />
  );
};

export default LanguageLevelSelect;
