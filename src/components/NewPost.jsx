import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.changeBodyHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={props.changeAuthorHandler}
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
