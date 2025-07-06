import img1 from "../../../assets/kkk.png";
import img2 from "../../../assets/investimg2.png";
import img3 from "../../../assets/investimg3.png";
const Dollarcard = () => {
  const info = [
    {
      title: "Diversify your savings",
      desc: "Having different types of savings and investments helps you reach your goals faster, and can protect you against risk and volatility.",
      image: img1,
    },
    {
      title: "Withdraw anytime",
      desc: "You can withdraw at anytime.",
      image: img2,
    },
    {
      title: "Earn interest",
      desc: "Earn up to 7% p/a paid monthly.",
      image: img3,
    },
  ];
  return (
    <div className="max-w-[1280px]  px-16 py-20 mx-auto ">
      <main>
        <h1 className="text-center text-5xl font-semibold">
          Preserve and grow your money
        </h1>
        <p className="text-center mt-3">
          Target Savings helps you get there faster. You can even team up with
          others to reach a collective target.
        </p>
      </main>
      <main className="flex flex-wrap gap-4 mt-10 ">
        {info?.map((data, i) => (
          <main
            className={`bg-white h-[550px] w-[350px] mx-[auto] px-10 pt-10 rounded-2xl shadow-md flex flex-col justify-between max-mobile:w-[97%]`}
            key={i}
          >
            <h1 className="text-[#0c1826] text-4xl font-bold mb-3  max-mobile:text-2xl  max-mobile:text-center">
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

export default Dollarcard;
