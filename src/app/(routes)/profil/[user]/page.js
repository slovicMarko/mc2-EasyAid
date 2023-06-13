"use client";
import VerifyEmail from "@/firebase/verifyEmail";
import { fetchUser } from "@/firebase/fetchUser";

import { useEffect, useState } from "react";

import "./profil.scss";
import Link from "next/link";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const userID = localStorage.getItem("user");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUser({
        collection: "users",
        docField: "userID",
        docValue: userID,
      });
      setUser(response);
      console.log(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page-content">
      <div className="container-buttons">
        <section className="profile-main">
          <Link
            className="button-edit"
            href={`/profil/${userID + "/uredi"}`}
            user={user}
          >
            Uredi
          </Link>

          <aside>
            <img src="/images/123.jpeg" />
            <h2>
              {user.fname} {user.lname}
            </h2>
            <p>{user.city ? user.city + ", Hrvatska" : "grad"}</p>
            <p>{user.region ? user.region + " županija" : "županija"}</p>
            <p>{user.telephone ? user.telephone : "broj mobitela"}</p>
          </aside>
        </section>
      </div>
      <section className="profile-info">
        <h2>O MENI</h2>
        <p>{user.about ? user.about : "potreban opis"}</p>
      </section>
      {/*
      <div className="profile-clickables">
      <form>
      <div>
      <input
      type="checkbox"
      id="email-notif"
      name="email-notif"
      value="Email"
      />
      <label for="email-notif">
      {" "}
      I would like to receive email reminders before actions.
      </label>
      </div>
      <div>
            <input
            type="checkbox"
              id="newsletter"
              name="newsletter"
              value="Newsletter"
              />
            <label for="newsletter">
            {" "}
            I would like to receive weekly newsletter about new actions.
            </label>
            </div>
            </form>
<button onClick={VerifyEmail}> Potvrdi račun </button>
          </div>*/}
    </div>
  );
}

export default Profile;
