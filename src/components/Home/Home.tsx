//dependencies
import { FC, useEffect, useState } from "react";
import Modal from "react-modal";

//actions
import { fetchUsers } from "actions";

//imports
import UserCard from "./UserCard";
import EditForm from "./EditForm";
import style from "./styles.module.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

Modal.setAppElement("#root");

const Home: FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    fetchUsers(setUsers, setLoading);
  }, []);

  const renderUserCards = () => {
    return (
      <div className={style.usersWrapper}>
        {users.map((user: User) => {
          return <UserCard key={user.id} user={user} setOpen={setOpen} setUser={setUser} />;
        })}
      </div>
    );
  };

  return (
    <>
      {!loading ? renderUserCards() : null}
      <Modal
        isOpen={open}
        style={{
          overlay: {
            background: `rgba(0, 0, 0, 0.65)`,
          },
        }}
        className={style.modal}
        onRequestClose={() => setOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <EditForm user={user} setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Home;
