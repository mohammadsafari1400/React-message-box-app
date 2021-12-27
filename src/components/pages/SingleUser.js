import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState("");
  const [tests, setTests] = useState([]);
  const { id } = useParams();
  // getUser
  const getUser = async () => {
    const { data } = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(data);
  };
  // history
  const history = useHistory();
  // useEffect
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // backHandler
  const backHandler = () => {
    history.push("/");
  };
  // add
  const add = () => {
    const newTests = [...tests];
    newTests.push(comments);
    setTests(newTests);
  };
  // onSubmitHandler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (comments.trim() !== "") {
      console.log(comments);
      add();
    }
    setComments("");
  };
  return (
    <ul className="wrapper">
      <li className="single-user">
        <div className="info">
          <h5 onClick={() => backHandler()} className="back-icon">
            <i className="fas fa-arrow-left"></i>
          </h5>
          <img src={`.${user.img}`} alt={user.user} />
          <div className="info-user">
            <h5>{user.user}</h5>
            <h5>{user.notifications}</h5>
          </div>
        </div>

        <div className="text">
          <div className="message">
            {user?.messages?.map((message, index) => (
              <div key={index}>
                <span>{message.value}</span>
              </div>
            ))}
          </div>
          <div className="add-comments">
            {tests.map((test, index) => (
              <div className="add-comment" key={index}>
                <span>{test}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="comment" onSubmit={(e) => onSubmitHandler(e)}>
          <input
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="type..."
          />
        </form>
      </li>
    </ul>
  );
};

export default SingleUser;
