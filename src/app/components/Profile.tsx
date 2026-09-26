import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <Image
        src="/profile.png"
        alt="User profile"
        width={30}
        height={30}
        className="rounded-2xl"
      />
    </div>
  );
};

export default Profile;
