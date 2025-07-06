import React from "react";

const Youtube = () => {
  return (
    <div className="max-w-[1280px] px-16 mx-auto py-28">
      <main>
        <h1 className="text-5xl font-semibold text-center">
          Meet Our Saver of the Month
        </h1>
        <p className="text-2xl text-center mt-6 ">
          Every month, we shine a spotlight on one saver, asking them about
          <br />
          their savings culture and how Piggyvest has helped them.
        </p>
      </main>
      <main className="flex items-center justify-center mt-8">
        <iframe
          className="border-[10px] border-white w-[800px] h-[450px] rounded-2xl "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2EnGMGxKuII?si
            =I7EfWJMymSWo1jKD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay;
              clipboard-write; encrypted-media; gyroscope;
               picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </main>
    </div>
  );
};

export default Youtube;
