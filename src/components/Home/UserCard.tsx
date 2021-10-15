//dependencies
import { Mail, Phone, Globe } from "react-feather";

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
}

const UserCard = (props: Props) => {
  const { user } = props;

  const imgLink = `https://avatars.dicebear.com/api/avataaars/${user.name.split(" ").join("")}.svg?mood[]=happy`;

  return (
    <div className={style.userCard}>
      <div
        className={style.imgContainer}
        style={{
          background: `#F5F5F5 url(${imgLink}) center no-repeat`,
        }}
      ></div>
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
    </div>
  );
};

export default UserCard;
