import Select from 'react-select';
import { most_spoken_languages } from '../../utils/constants';

const LanguageComboBox = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  const options = most_spoken_languages.map(lang => {
    const code = lang.flag.toLowerCase();
    return {
      value: lang.name,
      label: (
        <span>
          <img
            src={`https://flagcdn.com/w40/${code}.png`}
            alt={`${lang.name} flag`}
            style={{ width: 20, height: 15, marginRight: 3 }}
          />
          {lang.name}
        </span>
      ),
    };
  });

  const selectedOption = options.find(option => option.value === value) || null;

  return (
    <Select
      options={options}
      onChange={option => onChange(option?.value || '')}
      value={selectedOption}
      placeholder="Select language"
      isClearable
    />
  );
};

export default LanguageComboBox;
