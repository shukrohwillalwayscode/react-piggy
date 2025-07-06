import img1 from "../../../assets/IMGB.png";
import img2 from "../../../assets/investimg2.png";
import img3 from "../../../assets/investimg3.png";
const PiggyBnkCard = () => {
  const info = [
    {
      title: "Save automatically",
      desc: "Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.",
      image: img1,
    },
    {
      title: "Save on the go",
      desc: "Don’t fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.",
      image: img2,
    },
    {
      title: "Build discipline",
      desc: "With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.",
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
            <h1 className="text-blue-600 text-4xl font-bold mb-3  max-mobile:text-2xl  max-mobile:text-center">
              {" "}
              {data.title}{" "}
            </h1>
            <p className=" max-w-[270px] text-gray-600 mb-3 max-mobile:max-w-[220px] max-mobile:items-center max-mobile:mx-auto">
              {data.desc}
            </p>
            <img src={data.image} className="w-[280px] mt-20" alt="" />
          </main>
        ))}
      </main>
    </div>
  );
};

export default PiggyBnkCard;
