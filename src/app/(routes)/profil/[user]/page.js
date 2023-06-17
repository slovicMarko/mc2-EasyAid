"use client";
import VerifyEmail from "@/firebase/verifyEmail";
import { fetchUser } from "@/firebase/fetchUser";

import { useEffect, useState } from "react";

import "./profil.scss";
import Link from "next/link";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [profilePicture, setProfilePicture] = useState(null);
  const userID = localStorage.getItem("user");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUser({
        collection: "users",
        docField: "userID",
        docValue: userID,
      });
      setUser(response[0]);
      setProfilePicture(response[1]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <div>
      <div className="profile-page-content">
        <div className="container-buttons">
          <div className="profile-main">

            <div>
              <img className="profile-image" src={profilePicture} />
              <h2 className="profile-name">
                {user.fname} {user.lname}
              </h2>
              <p className="secondary-info">
                {user.city ? user.city + ", Hrvatska" : null}
              </p>
              <p className="secondary-info">
                {user.region ? user.region + " županija" : null}
              </p>
              <p className="secondary-info">
                {user.telephone ? user.telephone : null}
              </p>
            </div>

            <div className="profile-buttons">
              <Link
                className="button-edit"
                href={`/profil/${userID + "/uredi"}`}
                user={user}
              >
                Uredi
              </Link>

              <button className="button-edit" onClick={VerifyEmail}>
                Potvrdi račun
              </button>
            </div>
            

          </div>
        </div>
        <div className="profile-info">
          <h2>O MENI</h2>
          <p>{user.about ? user.about : "potreban opis"}</p>
        </div>
      </div>
      <div className="bottom-actions">
        <h2>Pohađane akcije</h2>
        <div>

        </div>
        <h2>Organizirane akcije</h2>
        <div>
          
        </div>
      </div>
    </div>
    
  );
}

export default Profile;
