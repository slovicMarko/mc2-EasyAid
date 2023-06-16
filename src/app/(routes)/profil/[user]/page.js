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
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <div className="profile-page-content">
      <div className="container-buttons">
        <div className="profile-main">
          <Link
            className="button-edit"
            href={`/profil/${userID + "/uredi"}`}
            user={user}
          >
            Uredi
          </Link>

          <div>
            <img className="profile-image" src="/images/123.jpeg" />
            <h2 className="profile-name">
              {user.fname} {user.lname}
            </h2>
            <p className="secondary-info">
              {user.city ? user.city + ", Hrvatska" : "grad"}
            </p>
            <p className="secondary-info">
              {user.region ? user.region + " županija" : "županija"}
            </p>
            <p className="secondary-info">
              {user.telephone ? user.telephone : "broj mobitela"}
            </p>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <h2>O MENI</h2>
        <p>{user.about ? user.about : "potreban opis"}</p>
      </div>
    </div>
  );
}

export default Profile;
