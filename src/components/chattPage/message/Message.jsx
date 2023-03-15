import React from "react";
import "./Message.css";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { BsMic } from "react-icons/bs";

function Message() {
  // const myComponentStyle = {
  //   width: 425,
  // };
  // const myComponentStyle1 = {
  //   display: "none",
  // };

  return (
    <>
      <div className="msgs_main1">
        <div className="write_comment_sec">
          <MdOutlineEmojiEmotions className="emoji-icon" />
          <ImAttachment className="attach_icon" />
          <form className="form">
            <input
              type="text"
              placeholder="write a message"
              className="msgInput"
            />
            <button type="submit">
              <MdSend className="msgSend_icon" />
            </button>
          </form>
          <BsMic className="micIcon" />
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

      {/* message_sec 375  */}
      {/* <div className="msgs_main_hide">
        <div className="write_comment_sec">
          <MdOutlineEmojiEmotions className="emoji-icon" />
          <ImAttachment className="attach_icon" />
          <form className="form">
            <input
              type="text"
              placeholder="write a message"
              className="msgInput"
            />
            <button type="submit">
              <MdSend className="msgSend_icon" />
            </button>
          </form>
          <BsMic className="micIcon" />
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
      </div> */}
      {/* message_sec 375  end*/}
    </>
  );
}

export default Message;
