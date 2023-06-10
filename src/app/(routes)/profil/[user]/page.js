import VerifyEmail from "@/firebase/verifyEmail";

import "./profil.scss";

function Profile() {
  return (
    <div className="profile-page-content">
      <section className="profile-image">
        <aside>
          <img src="/images/profilePic.jpg"/>
          <button>Change image</button>
        </aside>
        <div className="profile-items">
          <button onClick={VerifyEmail}> Verify </button>
          <form action="/send-data-here" method="post">
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      
    </div>
  );
}

export default Profile;
