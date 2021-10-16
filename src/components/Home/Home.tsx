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
  const [open, setOpen] = useState(true);
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
          return <UserCard key={user.id} user={user} setOpen={setOpen} />;
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
          // content: { inset: "10rem", width: "700px", height: "440px", margin: "auto", padding: "0", border: "none" },
        }}
        className={style.modal}
      >
        <EditForm user={user} setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Home;
