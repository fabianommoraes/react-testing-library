import React from 'react';

interface InputProps {
  children: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = ({ children, value, onChange }: InputProps) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        placeholder="Example"
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
