import React from "react";

const ImageTile = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#111111] py-10">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto w-full text-center text-3xl font-bold text-white md:w-[50%]">
          Have a small peak into our application
        </h2>
        <p className="text-center text-lg text-gray-400">
          Seamlessly integrated with industry-leading domain registrars
        </p>
        <div className="mx-auto flex w-full flex-col justify-between gap-6 pt-4 md:w-[80%] md:flex-row">
          <div className="h-96 w-full rounded-2xl bg-blue-400 md:w-[49%]"></div>
          <div className="h-96 w-full rounded-2xl bg-blue-400 md:w-[49%]"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageTile;
