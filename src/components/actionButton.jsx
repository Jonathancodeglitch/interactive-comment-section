import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";
import ReplyBtn from "./replyBtn";

export default function ActionButtons({
  currentUser,
  user,
  getRepliedComment,
  commentId,
}) {
  //if the comments where not made by the current user hide the Edit|delete buttons
  let isCurrentUser = currentUser.username === user.username;
  return (
    <div className="user_action-btns">
      {/* delete button */}
      {isCurrentUser && (
        <button type="button" className="del-btn">
          <img src={deleteIcon} alt="delete icon" />
          <span>Delete</span>
        </button>
      )}
      {/* edit button */}
      {isCurrentUser && (
        <button type="button" className="edit-btn">
          <img src={editIcon} alt="edit icon" />
          <span>Edit</span>
        </button>
      )}
      {/* reply button */}
      {!isCurrentUser && (
        <ReplyBtn
          user={user}
          commentId={commentId}
          getRepliedComment={getRepliedComment}
        />
      )}
    </div>
  );
}
