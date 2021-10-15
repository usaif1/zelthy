interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
}

const UserCard = (props: Props) => {
  const { user } = props;

  return (
    <div key={user.id}>
      name : {user.name}
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
