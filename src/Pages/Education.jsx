import React from "react";

import ProfileHeader from "../Components/ProfileHeader";
import IconFooter from "../Components/IconFooter";

const Education = () => {
  return (
    <>
      {/* Block 1 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white ">
        <ProfileHeader cat={true} name="Kueakun-K" text="2020 - now" />
        {/* text */}
        <div className="mb-3 mx-5">
          2020 - now <br /> I'm studying at{" "}
          <span className="text-yellow-500 dark:text-red-500">
            King Mongkut's Institute of Technology Ladkrabang – KMITL
          </span>
          <br />
          <span className="text-red-500 dark:text-yellow-500">
            In faculty of Computer Engineering
          </span>
        </div>
        {/* text */}

        <IconFooter />
      </div>
      {/* Block 1 */}

      {/* Block 2 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white ">
        <ProfileHeader cat={true} name="Kueakun-K" text="2014 - 2019" />
        {/* text */}
        <div className="mb-3 mx-5">
          2014 - 2019 <br /> I'm studied at{" "}
          <span className="text-yellow-500 dark:text-red-500">
            Sakaeo School
          </span>
          <br />
          <span className="text-red-500 dark:text-yellow-500">
            In Science Math Technology and Environment Program - SMTE
          </span>
        </div>
        {/* text */}

        <IconFooter />
      </div>
      {/* Block 2 */}
    </>
  );
};

export default Education;
