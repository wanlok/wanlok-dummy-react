import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredValue(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {props.modalIsVisible && (
        <Modal onClose={props.onClose}>
          <NewPost
            changeBodyHandler={changeBodyHandler}
            changeAuthorHandler={changeAuthorHandler}
            onClose={props.onClose}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredValue} />
        <Post author="Peter" body="BBBBB" />
      </ul>
    </>
  );
}

export default PostsList;
