import img1 from "../../../assets/pq.png";
import img2 from "../../../assets/investimg2.png";
import img3 from "../../../assets/investimg3.png";
const Flexcard = () => {
  const info = [
    {
      title: "Free transfers and withdrawals",
      desc: "Withdraw or transfer anytime you need to.",
      image: img1,
    },
    {
      title: "Manage your money",
      desc: "Organise, separate, name and categorise your emergency funds with Labels in Flex Naira.",
      image: img2,
    },
    {
      title: "Earn interest",
      desc: "We believe that every money you have saved should be earning you interests, even if it's an emergency fund.",
      image: img3,
    },
  ];
  return (
    <div className="max-w-[1280px]  px-16 py-20 mx-auto ">
      <main>
        <h1 className="text-center text-5xl font-semibold">
          Be better prepared for emergencies.
        </h1>
        <p className="text-center mt-3">
          Building an emergency fund helps hedge against life’s risks and can
          help reduce frivolous spending.
        </p>
      </main>
      <main className="flex flex-wrap gap-4 mt-10 ">
        {info?.map((data, i) => (
          <main
            className={`bg-white h-[550px] w-[350px] mx-[auto] px-10 pt-10 rounded-2xl shadow-md flex flex-col justify-between  max-mobile:w-[97%]`}
            key={i}
          >
            <h1 className="text-pink-500 text-4xl font-bold mb-3  max-mobile:text-2xl  max-mobile:text-center ">
              {" "}
              {data.title}{" "}
            </h1>
            <p className="w-[270px] text-gray-600 mb-3 max-mobile:max-w-[220px] max-mobile:items-center max-mobile:mx-auto">
              {data.desc}
            </p>
            <img src={data.image} className="w-[280px] mt-20" alt="" />
          </main>
        ))}
      </main>
    </div>
  );
};

export default Flexcard;
