import type { UserProfileCardProps } from '../../types';


// showEmail = true means the email is shown by default
export function UserProfileCard({user,showEmail = true,showRole = true,onEdit,children,}: UserProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        {/* displays the image if available; otherwise, it displays the first letter of the name. */}
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="profile-avatar"
          />
        ) : (
          <div className="profile-avatar profile-placeholder">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}

        <h2>{user.name}</h2>
      </div>

      {showEmail && <p>Email: {user.email}</p>}

      {showRole && <p>Role: {user.role}</p>}
      
      {/* onEdit && (...) because the Edit Profile button should only appear when the onEdit function is provided. */}
      {onEdit && (
        <button
          type="button"
          className="profile-button"
          onClick={() => onEdit(user.id)}
        >
          Edit Profile
        </button>
      )}

      {children && (
        <div className="profile-extra">{children}</div>
      )}
    </div>
  );
}