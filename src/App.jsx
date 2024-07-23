import Comment from "./components/comment.jsx";
import AddComment from "./components/addComment.jsx";
import data from "./data.json";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

/* 
### Expected behaviour

- First-level comments should be ordered by their score, whereas nested replies are ordered by time added.
- Replying to a comment adds the new reply to the bottom of the nested replies within that comment.
- A confirmation modal should pop up before a comment or reply is deleted.
- Adding a new comment or reply uses the `currentUser` object from within the `data.json` file.
- You can only edit or delete your own comments and replies. */

/// restating the problem building an interactive comment section
// the user should be able  to add a comment
// reply to an existing comment
//delete his/her comment
// edit his/her comment
// show date comment was added
// the user should be able to upvote or downvote a comment just once
//first level comments should be ordered by their votes
// why replies should be arranged by the time dey where added

// how do we reply a comment that is a reply
// get the reply
// get the comment its replying
// push the reply to the comment and display

// a variable should be set to true
// get the comment that was replied to
//  loop through the comments
// check if any of the comment id is equal to the id clicked
// if no check inside the replies array
// if found in the reples array
//push the new reply to that comment
// push the reply to the comment array
// update the commentlist with the new comment holding the reply
// display the new commentlist

function App() {
  const currentUser = data.currentUser;
  const [commentList, setCommentList] = useState([...data.comments]);
  const [comment, setComment] = useState("");

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  //reply to a comment
  //hold the id of the comment that was clicked
  let repliedCommentIdRef = useRef(null);

  //update the repliedCommentId with the clicked comment id
  function getRepliedComment(repliedCommentId, username) {
    repliedCommentIdRef.current = repliedCommentId;
    //show the  username of the comment that was clicked in the textarea
    setComment(`@${username} `);
  }

  //update the comment that was clicked by adding the new reply made to the comment
  function addReplyToComments() {}

  function addCommentToCommentList() {
    // check if the replied btn was clicked
    if (repliedCommentIdRef.current) {
      //add replies to commetList
      addReplyToComments();
      //update the previous comment to the new one
      const newComments = commentList.map((commentList) => {
        if (commentList.id === repliedCommentIdRef.current) {
          commentList.replies.push({
            id: uuidv4(),
            content: comment,
            createdAt: "ages ago",
            score: 4,
            replyingTo: commentList.user.username,
            user: {
              image: {
                png: "/assets/images/avatars/image-ramsesmiron.png",
                webp: "/assets/images/avatars/image-ramsesmiron.webp",
              },
              username: "naruto",
            },
          });
        } else {
          commentList.replies.map((reply) => {
            if (reply.id === repliedCommentIdRef.current) {
              console.log(reply.user.username);
              commentList.replies.push({
                id: uuidv4(),
                content: comment,
                createdAt: "ages ago",
                score: 4,
                replyingTo: reply.user.username,
                user: {
                  image: {
                    png: "/assets/images/avatars/image-ramsesmiron.png",
                    webp: "/assets/images/avatars/image-ramsesmiron.webp",
                  },
                  username: "naruto uzumaki",
                },
              });
            }
          });
        }
        return commentList;
      });

      console.log(newComments);
      //display comment
      setCommentList(newComments);

      //after reply is posted change its status to null
      // this allows the user to post regularly
      repliedCommentIdRef.current = null;
    } else {
      // if replied btn was not clicked then its a new comment post
      let newComment = {
        id: uuidv4(),
        content: comment,
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            png: "/assets/images/avatars/image-amyrobson.png",
            webp: "/assets/images/avatars/image-juliusomo.webp",
          },
          username: currentUser.username,
        },
        replies: [],
      };

      setCommentList([...commentList, newComment]);
    }

    //clear textarea
    setComment("");
  }

  //get unique id for comments
 function removeUserNamefromComment(){
  
 }

  return (
    <div className="main">
      <div className="container">
        {commentList.map((comment) => {
          return (
            <Comment
              key={comment.id}
              commentId={comment.id}
              comment={comment.content}
              user={comment.user}
              score={comment.score}
              createdAt={comment.createdAt}
              currentUser={currentUser}
              replies={comment.replies}
              getRepliedComment={getRepliedComment}
            />
          );
        })}
        <AddComment
          currentUser={currentUser}
          handleCommentChange={handleCommentChange}
          comment={comment}
          addCommentToCommentList={addCommentToCommentList}
        />
      </div>
    </div>
  );
}

export default App;
