import { Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";

const getProfile = function () {
  //   console.log("loca==>", localStorage.getItem("isLoggedIN"));
  const [isUserLoggedIn, setUserStatus] = useState(false);

  useEffect(function () {
    const { isLoggedIN } = window.localStorage;
    console.log({ isLoggedIN, isUserLoggedIn });
    setUserStatus(isLoggedIN == "true" ? true : false);

    console.log({ isUserLoggedIn });
  }, []);

  return (
    <Avatar
      bordered
      as="button"
      color="primary"
      size="md"
      src={
        isUserLoggedIn ? "" : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
      }
    />
  );
};

export default getProfile;
