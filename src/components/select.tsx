import React, { useState, useEffect, useRef } from 'react';
import { profileSlice } from '../redux/profile'
import { useDispatch } from 'react-redux';
import './select.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface IGenderSelectProps {
  title: string;
  options: any[];
  onSelect: (option: any) => void;
}

export const GenderSelect: React.FunctionComponent<IGenderSelectProps> = (props) => {
  const dispatch = useDispatch();

  const { options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState(options[0].label);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      dispatch(profileSlice.actions.setGender(displayValue));
    }
  }, [isOpen, displayValue]);




  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="selected-sex inter-normal-white-15px">{displayValue}</div>
        <img className="select-image" src={process.env.PUBLIC_URL + '/img/generateBMI/arrow-down@1x.png'} alt="arrow-down" />
      </div>
      {isOpen && (
        <ul className="dropdown-options" onBlur={() => setIsOpen(!isOpen)}>
          {options.map((option: any) => (
            <li className='inter-normal-white-12px' key={option.value}  
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