//dependencies
import { FC, useState } from "react";
import { Mail, Phone, Globe, Trash, Heart, Edit3 } from "react-feather";

//imports
import style from "./styles.module.css";

//interface
interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  setOpen: any;
  setUser: any;
}

const UserCard: FC<Props> = (props) => {
  const { user, setOpen, setUser } = props;
  const [actions, setActions] = useState({
    like: false,
    edit: false,
    delete: false,
  });

  const imgLink = `https://avatars.dicebear.com/api/avataaars/${user.name.split(" ").join("")}.svg?mood[]=happy`;

  const onEdit = () => {
    setUser(user);
    setOpen(true);
    return;
  };

  const userDetails = (
    <div className={style.userDetails}>
      <p className={style.userName}>{user.name}</p>
      <div className={style.detailsContainer}>
        <Mail />
        <p className={style.detail}>{user.email}</p>
      </div>
      <div className={style.detailsContainer}>
        <Phone />
        <p className={style.detail}>{user.phone}</p>
      </div>
      <div className={style.detailsContainer}>
        <Globe />
        <p className={style.detail}>{user.website}</p>
      </div>
    </div>
  );

  const footer = (
    <div className={style.footerWrapper}>
      <Heart
        size={"2rem"}
        fill={actions.like ? "#F62A2A" : "transparent"}
        onClick={() => setActions({ ...actions, like: !actions.like })}
        strokeWidth={1.5}
        stroke="red"
      />
      <span className={style.verticalDivider}>|</span>
      <Edit3 size={"2rem"} strokeWidth={1.5} onClick={onEdit} />
      <span className={style.verticalDivider}>|</span>
      <Trash
        size={"2rem"}
        fill={actions.delete ? "#268CFF" : "transparent"}
        onClick={() => setActions({ ...actions, delete: !actions.delete })}
        strokeWidth={1.5}
      />
    </div>
  );

  return (
    <div className={style.userCard}>
      <div
        className={style.imgContainer}
        style={{
          background: `#F5F5F5 url(${imgLink}) center no-repeat`,
        }}
      ></div>
      {userDetails}
      {footer}
    </div>
  );
};

export default UserCard;
