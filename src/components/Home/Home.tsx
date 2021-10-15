//dependencies
import { FC, useEffect, useState } from "react";

//actions
import { fetchUsers } from "actions";

//imports
import UserCard from "./UserCard";
import style from "./styles.module.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const Home: FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers(setUsers, setLoading);
  }, []);

  const renderUserCards = () => {
    return (
      <div className={style.usersWrapper}>
        {users.map((user: User) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    );
  };

  return <>{!loading ? renderUserCards() : null}</>;
};

export default Home;
