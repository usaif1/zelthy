//dependencies
import axios from "axios";

//interface
interface Response {
  data: [
    {
      id: number;
      email: string;
      name: string;
      phone: string;
    }
  ];
}

//fetch users
export const fetchUsers = async (setUsers: any, setLoading: any) => {
  try {
    const response: Response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
    setLoading(false);
  } catch (err) {
    console.log("Error fetching users", err);
  }
};

//disable scroll
export const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

//enable scroll
export const enableBodyScroll = () => {
  document.body.style.overflow = "unset";
};
