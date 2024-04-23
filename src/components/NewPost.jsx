import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
  const [enteredBody, setEnteredValue] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    }
    console.log(postData);
    props.onAddPost(postData);
    props.onClose();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
