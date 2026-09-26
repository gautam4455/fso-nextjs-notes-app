import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <Image src="/profile.png" alt="User profile" width={20} height={20} />
    </div>
  );
};

export default Profile;
