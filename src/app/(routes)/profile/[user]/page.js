import VerifyEmail from "@/firebase/verifyEmail";

function Profile() {
  return (
    <div className="profile">
      <button onClick={VerifyEmail}> Verify </button>
    </div>
  );
}

export default Profile;
