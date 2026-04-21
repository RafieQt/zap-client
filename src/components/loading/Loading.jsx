import React from "react";
import Lottie from "lottie-react";
import animation from '../../assets/animations/loading.json'
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <span className="loading loading-spinner loading-lg text-primary"></span> */}
      <div style={{ width: 300 }}>
      <Lottie animationData={animation} loop={true} />
    </div>
    </div>
  );
};

export default Loading;