import { useEffect, useState } from "react";
import User from "./User";

const Users = ({ users, getUsers }) => {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  // useEffect
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // imagSrcHandle
  const imagSrcHandle = (img) => {
    setImgSrc(img);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={imgSrc} alt="pic" />
        <div className="close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
      <ul className="wrapper users">
        <h2 className="title">Telegram</h2>
        {users.map((user) => (
          <User key={user.id} user={user} imagSrcHandle={imagSrcHandle} />
        ))}
      </ul>
    </>
  );
};

export default Users;
