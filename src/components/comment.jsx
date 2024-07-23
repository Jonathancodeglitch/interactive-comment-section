import Vote from "./vote";
import Profile from "./profile";
import ActionButtons from "./actionButton";
import CommentReply from "./commentReply";

export default function Comment({
  currentUser,
  comment,
  createdAt,
  score,
  user,
  replies,
  commentId,
  getRepliedComment,
}) {
  return (
    <>
      <div className="user">
        <Vote vote={score} />
        <div className="user_content">
          {/* user_content header begins */}
          <div className="user_content-header">
            <Profile
              currentUser={currentUser}
              user={user}
              createdAt={createdAt}
            />
            <ActionButtons
              commentId={commentId}
              currentUser={currentUser}
              user={user}
              getRepliedComment={getRepliedComment}
            />
          </div>
          {/* user_content header ends */}
          <p className="user_comment">{comment}</p>
        </div>
      </div>
      {/* comment replies */}
      {/* check if a comment has replies on them
        if they do display the comments and all its reply
        else just display its reply */}
      {replies.length > 0 && (
        <CommentReply
          replies={replies}
          currentUser={currentUser}
          getRepliedComment={getRepliedComment}
        />
      )}
    </>
  );
}
