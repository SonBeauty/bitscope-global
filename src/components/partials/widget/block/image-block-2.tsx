import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
const ImageBlock2 = () => {
  const user = useSelector((state: RootState) => state.users.user);
  return (
    <div className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative bg-blue-400">
      <div>
        <h4 className="text-xl font-medium text-white mb-2">
          <span className="block font-normal">Good evening,</span>
          <span className="block">{user?.name}</span>
        </h4>
        <p className="text-sm text-white font-normal">
          Welcome to {user?.name}
        </p>
      </div>
    </div>
  );
};

export default ImageBlock2;
