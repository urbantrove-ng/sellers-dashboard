import kind from "../../../assets/icons/kindd.svg";

export const Welcome = () => {
  return (
    <>
      <div
        className="  flex flex-cols-2 mt-3 bg-{#588d9c} rounded-lg  p-4 mb-4 ml-2 border-l shadow-lg"
        style={{
          background:
            "linear-gradient(113.3deg, rgb(134, 209, 228) -1.8%, rgb(60, 80, 115) 36.4%)",
        }}
      >
        {/** Table Data */}
        <div className=" -mt-9  ">
          <img src={kind} alt="welcome_image" />
        </div>
        <div className="py-5 ">
          Hi, Fatima Yusuf{" "}
          <p className=" font-extrabold  text-xl py-3 ">
            Welcome to Urban Trove
          </p>
          <p className="col-span-1">
            Product activity will be updated here. Click on the name section to
            set your configuration.
          </p>
        </div>
      </div>
    </>
  );
};
