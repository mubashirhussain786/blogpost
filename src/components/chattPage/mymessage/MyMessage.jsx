import React from "react";
import "./MyMessage.css";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { BsMic } from "react-icons/bs";
import { MdAddIcCall } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";

function MyMessage() {
  return (
    <>
      <div className="message_main">
        {/* <div className="navbar"> */}
        <div className="navbar_main">
          <div className="profile_image_name">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd1eXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="image"
            />
            <h1>Nusrat Fateh Ali</h1>
          </div>
          <div className="navbar_icon">
            <MdAddIcCall className="audiocall_icon" />
            <MdVideoCall className="videocall_icon" />
          </div>
        </div>
        {/* </div> */}
        <div className="chatt_main">
          <div className="write_comment_section">
            <MdOutlineEmojiEmotions className="emoji-icons" />
            <ImAttachment className="attach_icons" />
            <form className="form_main">
              <input
                type="text"
                placeholder="write a message"
                className="msginput"
              />
              <button type="submit">
                <MdSend className="msgsend_icon" />
              </button>
            </form>
            <BsMic className="micicon" />
          </div>
          <div className="msg_inbox_send_parrent">
            <div className="msg_inbox_send_child">
              <h2>hello Brother</h2>
              <p>8:33am</p>
            </div>
          </div>

          <div className="msg_inbox_receive_parrent">
            <div className="msg_inbox_receive_child">
              <h2>O yes Brother</h2>
              <p>8:40am</p>
            </div>
          </div>
          <div className="msg_inbox_send_parrent">
            <div className="msg_inbox_send_child">
              <h2>How are you bro?</h2>
              <p>8:33am</p>
            </div>
          </div>
          <div className="msg_inbox_receive_parrent">
            <div className="msg_inbox_receive_child">
              <h2>Yeah I'm fine. what about you</h2>
              <p>8:40am</p>
            </div>
          </div>
          <div className="msg_inbox_send_parrent">
            <div className="msg_inbox_send_child">
              <h2>I'm fine. why you are off now days</h2>
              <p>8:33am</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyMessage;
