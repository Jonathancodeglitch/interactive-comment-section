import Vote from "./vote";
import Profile from "./profile";
import ActionButtons from "./actionButton";

export default function CommentReply({
  replies,
  currentUser,
  getRepliedComment,
}) {
  return (
    <div className="reply-comment">
      {replies.map((reply) => {
        return (
          <div key={reply.id} className="user">
            <Vote vote={reply.score} />
            <div className="user_content">
              {/* user_content header begins */}
              <div className="user_content-header">
                <Profile
                  currentUser={currentUser}
                  user={reply.user}
                  createdAt={reply.createdAt}
                />
                <ActionButtons
                  commentId={reply.id}
                  currentUser={currentUser}
                  user={reply.user}
                  getRepliedComment={getRepliedComment}
                />
              </div>
              {/* user_content header ends */}

              <p className="user_comment">
                <span>{`@${reply.replyingTo}`}</span> {reply.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
