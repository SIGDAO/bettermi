import React, { useState } from 'react';
import './select.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface IGenderSelectProps {
  title: string;
  options: any[];
  onSelect: (option: any) => void;
}

export const GenderSelect: React.FunctionComponent<IGenderSelectProps> = (props) => {
  const { options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState(options[0].label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="selected-sex inter-normal-white-15px">{displayValue}</div>
        <img className="select-image" src={process.env.PUBLIC_URL + '/img/generateBMI/arrow-down@1x.png'} alt="arrow-down" />
      </div>
      {isOpen && (
        <ul className="dropdown-options" onBlur={() => setIsOpen(!isOpen)}>
          {options.map((option: any) => (
            <li className='inter-normal-15px' key={option.value}  
              onClick={() => {
                props.onSelect(setDisplayValue(option.label));
                toggleDropdown();
              }}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// export default GenderSelect;