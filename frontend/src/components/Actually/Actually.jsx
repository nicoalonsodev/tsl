import React from "react";

const Actually = ({ historyPart3, actually, img4 }) => {
  return (
    <div className="flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 py-4 ">
      <div className="w-full flex flex-wrap justify-center items-center text-left space-y-6">
        {historyPart3?.map((paragraph, index) => (
          <div className="w-full mt-4" key={index}>
            <p
              className="poppins-regular text-lg lg:text-xl text-gray-100"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex items-start justify-center mt-10">
        <div className=" bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-[46%]">
            <img
              className="w-full rounded-lg object-cover"
              src={img4}
              alt="Profile"
            />
          </div>
          <div className="w-full lg:w-[46%] flex flex-wrap items-start">
            <div className="w-full mt-4">
              <p className="poppins-bold text-3xl text-gray-700">
                Ya en 2024...
              </p>
            </div>
            {actually?.map((paragraph, index) => (
              <div className="w-full mt-4" key={index}>
                <p
                  className="poppins-regular text-lg lg:text-xl text-gray-700"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actually;
