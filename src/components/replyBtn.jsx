import replyIcon from "../assets/images/icon-reply.svg";

export default function ReplyBtn({ commentId, getRepliedComment, user }) {
  return (
    <button
      onClick={() => getRepliedComment(commentId, user.username)}
      type="button"
      className="reply-btn"
    >
      <img src={replyIcon} alt="reply icon" />
      <span>Reply</span>
    </button>
  );
}
