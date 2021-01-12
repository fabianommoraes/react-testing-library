import React, { useState } from 'react';

const App: React.FC = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Input value={text} onChange={handleChange}>
        Input:
      </Input>
      <p>You typed: {text || '...'}</p>
    </div>
  );
};

interface InputProps {
  children: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = ({ children, value, onChange }: InputProps) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default App;
