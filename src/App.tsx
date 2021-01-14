import React, { useEffect, useState } from 'react';
import { getUser, User } from './get-user';
import Input from './Input';

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

export default App;
