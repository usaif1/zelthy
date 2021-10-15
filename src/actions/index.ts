//dependencies
import axios from "axios";

export const fetchUsers = async (setUsers: any, setLoading: any) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
    setLoading(false);
  } catch (err) {
    console.log("Error fetching users", err);
  }
};
