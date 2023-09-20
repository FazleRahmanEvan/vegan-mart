import React from "react";

const SubscribeNews = () => {
  return (
    <div className="bg-secondary">
      <div className="p-10">
        <h1 className="text-xl text-white font-medium">
          Subscribe on our newsletter
        </h1>
        <p className=" text-white mt-5">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="join mt-6">
          <input
            className="input input-bordered input-sm join-item"
            placeholder="Email"
          />
          <button className="btn-sm bg-blue-700 hover:bg-blue-500 text-white join-item ">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
