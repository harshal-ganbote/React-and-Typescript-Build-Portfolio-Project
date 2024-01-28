import { useState } from "react";


const users = [
  { name: "harshal", age: 31 },
  { name: "shraddha", age: 26 },
  { name: "Deepak Meena", age: 65 }
];

const UserSearch: React.FC = () => {

  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);

    setUser(foundUser);
  };

  return (
    <div>
      User Search

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}{user && user.age}</div>
    </div>
  );
};

export default UserSearch;