import img1 from "../../../assets/gggg.png";
import img2 from "../../../assets/investimg2.png";
import img3 from "../../../assets/investimg3.png";
const Targetcard = () => {
  const info = [
    {
      title: "Your target(s), your rules",
      desc: "Customise the rules and duration of your target savings as you wish. From public mode, automated savings, to multiple targets, you’re in control.",
      image: img1,
    },
    {
      title: "Save with a group",
      desc: "Challenge yourself to meet your goals by saving towards a common goal with a group. No one has access to your funds but you.",
      image: img2,
    },
    {
      title: "Daily interest accrued",
      desc: "Earn 12% per annum to help you reach your goal faster. Think of it as a reward for meeting your target.",
      image: img3,
    },
  ];
  return (
    <div className="max-w-[1280px]  px-16 py-20 mx-auto ">
      <main>
        <h1 className="text-center text-5xl font-semibold">
          Save towards multiple goals
        </h1>
        <p className="text-center mt-3">
          Target Savings helps you get there faster. You can even team up with
          others to reach a collective target.
        </p>
      </main>
      <main className="flex flex-wrap gap-4 mt-10 ">
        {info?.map((data, i) => (
          <main
            className={`bg-white h-[550px] w-[350px] mx-[auto] px-10 pt-10 rounded-2xl shadow-md flex flex-col justify-between max-mobile:w-[97%] `}
            key={i}
          >
            <h1 className="text-green-600 text-4xl font-bold mb-3  max-mobile:text-2xl  max-mobile:text-center">
              {" "}
              {data.title}{" "}
            </h1>
            <p className="max-w-[270px] text-gray-600 mb-3  max-mobile:max-w-[220px] max-mobile:items-center max-mobile:mx-auto">
              {data.desc}
            </p>
            <img src={data.image} className="w-[280px] mt-20" alt="" />
          </main>
        ))}
      </main>
    </div>
  );
};

export default Targetcard;
