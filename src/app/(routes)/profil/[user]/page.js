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
      <div className="profile-about">
          <form className="about-form">
            <label htmlFor="about">About:</label>
            <textarea id="about" name="about" />
          </form>
          <form className="contact-form">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" />
            <label htmlFor="phone">Phone number:</label>
            <input type="text" id="phone" name="phone" />
          </form>
      </div>
      <div className="profile-clickables">
        <form>
          <div>
            <input type="checkbox" id="email-notif" name="email-notif" value="Email"/>
            <label for="email-notif"> I would like to receive email reminders before actions.</label>
          </div>
          <div>
            <input type="checkbox" id="newsletter" name="newsletter" value="Newsletter"/>
            <label for="newsletter"> I would like to receive weekly newsletter about new actions.</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
