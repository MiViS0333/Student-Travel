'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Option {
    value: string;
    label: string;
}

interface NiceSelectProps {
    options: Option[];
    placeholder: string;
    name: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export default function NiceSelect({ options, placeholder, name, defaultValue = '', onChange }: NiceSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(
        options.find((o) => o.value === defaultValue) || null
    );
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option.value);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`nice-select cus-form-control ${isOpen ? 'open' : ''}`} ref={containerRef} onClick={toggleOpen}>
            <input type="hidden" name={name} value={selected?.value || ''} />
            <span className="current">{selected ? selected.label : placeholder}</span>
            <ul className="list">
                <li
                    className={`option disabled`}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {placeholder}
                </li>
                {options.map((option) => (
                    <li
                        key={option.value}
                        className={`option ${selected?.value === option.value ? 'selected focus' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleSelect(option);
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
