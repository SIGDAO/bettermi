import * as React from 'react';
import './select.css';

interface IGenderSelectProps {
  optionList: string[];
}

// for new, just for generateBMI page
// it maybe can be used for other pages
export const GenderSelect: React.FunctionComponent<IGenderSelectProps> = (props) => {
  const {optionList} = props;

  const optionDisplay = optionList.map((option) => {
    return (
      <option value={option}>{option}</option>
    );
  });

  return (
    <select className="select-outside" name="gender">
      {optionDisplay}
    </select>
  );
};

