import img1 from "../../../assets/BBB.png";
import img2 from "../../../assets/investimg2.png";
import img3 from "../../../assets/investimg3.png";
const Safecard = () => {
  const info = [
    {
      title: "You’re in control",
      desc: "You can lock for as little as 10 days or as much as 365 days.",
      image: img1,
    },
    {
      title: "Manage your money",
      desc: "Set aside funds for a fixed period of time without having access to it until maturity.",
      image: img2,
    },
    {
      title: "Earn interest upfront",
      desc: "Up to 20% interest per annum, paid upfront.",
      image: img3,
    },
  ];
  return (
    <div className="max-w-[1280px]  px-16 py-20 mx-auto ">
      <main>
        <h1 className="text-center text-5xl font-semibold">
          Save without thinking about it.
        </h1>
        <p className="text-center mt-3">
          Enjoy automated savings, quick manual savings top up and competitive
          interest rates.
        </p>
      </main>
      <main className="flex flex-wrap gap-4 mt-10 ">
        {info?.map((data, i) => (
          <main
            className={`bg-white h-[550px] w-[350px] mx-[auto] px-10 pt-10 rounded-2xl shadow-md flex flex-col justify-between max-mobile:w-[97%] `}
            key={i}
          >
            <h1 className="text-blue-400 text-4xl font-bold mb-3   max-mobile:text-2xl  max-mobile:text-center">
              {" "}
              {data.title}{" "}
            </h1>
            <p className="max-w-[270px] text-gray-600 mb-3 max-mobile:max-w-[220px] max-mobile:items-center max-mobile:mx-auto">
              {data.desc}
            </p>
            <img src={data.image} className="w-[280px] mt-20" alt="" />
          </main>
        ))}
      </main>
    </div>
  );
};

export default Safecard;
