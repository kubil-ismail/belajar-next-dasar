import React from "react";
import style from "../styles/layouts/Mainlayout.module.css";
import { useRouter } from "next/router";
import { database, userId } from "../firebase";
import { ref, set } from "firebase/database";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

function MainLayout(props) {
  const router = useRouter();
  const [widthRoot, setWidhRoot] = React.useState(300);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    var clientWidth = document.getElementById("container").clientWidth;
    setWidhRoot(clientWidth);
  }, []);

  const handleSend = () => {
    const starCountRef = ref(database, `messages/${1}/${new Date().getTime()}`);

    if (message !== "") {
      set(starCountRef, {
        message: message,
        message_time: new Date().getTime(),
        user_id: userId,
        message_status: "sended",
        message_type: "text",
      });

      setMessage("");
    }
  };

  return (
    <div>
      <div className="row justify-content-lg-center">
        <div className="col-lg-4 col-xs-12" id="container">
          <div className={style.root} style={{ backgroundColor: "#B2C6D9" }}>
            {props.children}
          </div>

          <div
            className="d-flex align-items-center"
            style={{
              justifyContent: "space-evenly",
              position: "fixed",
              bottom: 0,
              width: `${(95 / 100) * widthRoot}px`,
              backgroundColor: "#fff",
              padding: "10px",
            }}
          >
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message here..."
                aria-label="messages"
                aria-describedby="basic-addon1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={() => handleSend()}>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
