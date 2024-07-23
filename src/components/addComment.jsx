export default function AddComment({
  currentUser,
  handleCommentChange,
  comment,
  addCommentToCommentList,
}) {
  return (
    <div className="add-comment-container">
      <img
        className="current-user-img"
        src={currentUser.image.webp}
        alt="current user profile img"
      />
      <textarea
        rows="4"
        name="add-comment"
        placeholder="Add a comment..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button
        onClick={addCommentToCommentList}
        type="button"
        className="add-commemt_btn"
      >
        SEND
      </button>
    </div>
  );
}
