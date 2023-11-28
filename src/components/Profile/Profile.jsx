import css from './Profile.module.css';
const Profile = ({ username, stats, avatar, tag, location }) => {
  return (
    <div className="profile">
      <div className="description">
        <div className={css.wrapper}>
          <img src={avatar} alt="User avatar" className="avatar" />
        </div>

        <p className="username">{username}</p>
        <p className="tag">@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
