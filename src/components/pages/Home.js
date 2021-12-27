import Users from "../telegram/Users";

const Home = ({ users, getUsers }) => {
  return (
    <div>
      <Users users={users} getUsers={getUsers} />
    </div>
  );
};

export default Home;
