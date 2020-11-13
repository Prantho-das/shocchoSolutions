import React, { useState } from "react"
const Copy = () => {
  const [time, uptime] = useState();
  setInterval(() => {
    uptime(new Date().toLocaleString());
  }, 1000);
  return (
    <>
            <p className="text-center">
              © {time} Shoccho-Solutions. All Rights Reserved | Terms and
              Conditions
            </p>
    </>
  );
};
export default Copy;
