import React, { useEffect, useState } from 'react';
import { getUser, User } from './get-user';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const user = await getUser();
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      {user ? <p>Username: {user.name}</p> : null}
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

export default App;
