import React from "react";

const UsersSkeleton = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
    </div>
  );
};

export default UsersSkeleton;
