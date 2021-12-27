import { Link } from "react-router-dom";
const User = ({ user, imagSrcHandle }) => {
  return (
    <li className="user">
      <div className="info">
        <img
          src={user.img}
          alt={user.user}
          onClick={() => imagSrcHandle(user.img)}
        />
        <Link to={`/single-user/${user.id}`}>
          <h5>{user.user}</h5>
        </Link>
      </div>
    </li>
  );
};

export default User;
