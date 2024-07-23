export default function ({ currentUser, user, createdAt }) {
  //if the comment was made by the current user show an icon
  let isCurrentUser = currentUser.username === user.username;
  return (
    <div className="profile">
      <img className="profile_img" src={user.image.webp} alt="user img" />
      <div className="profile_name">
        {user.username}{" "}
        {isCurrentUser && <span className="currentuser-icon">you</span>}
      </div>
      <div className="create-at">{createdAt}</div>
    </div>
  );
}
