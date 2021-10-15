//dependencies
import { FC, useEffect, useState } from "react";

//actions
import { fetchUsers } from "actions";

//imports
import UserCard from "./UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Home: FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers(setUsers, setLoading);
  }, []);

  const renderUserCards = () => {
    return users.map((user: User, index: number) => {
      return <UserCard key={user.id} user={user} />;
    });
  };

  return <>{!loading ? renderUserCards() : null}</>;
};

export default Home;
