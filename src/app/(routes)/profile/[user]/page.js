import VerifyEmail from "@/firebase/verifyEmail";

import "./profile.scss";

function Profile() {
  return (
    <div className="profile">
      <button onClick={VerifyEmail}> Verify </button>
      <form action="/send-data-here" method="post">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
