import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={`custom-select-container ${isOpen ? 'is-open' : ''}`} ref={containerRef}>
            <div className="custom-select-trigger" onClick={handleToggle}>
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                <i className={`fa-light fa-chevron-down arrow-icon ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            {isOpen && (
                <div className="custom-select-options">
                    <div className="options-wrapper">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`custom-select-option ${value === option.value ? 'selected' : ''}`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
