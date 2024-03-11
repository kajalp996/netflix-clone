import React from "react";

const Movie = (item) => {
  return (
   <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute h-full w-full top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-gray-300"></FaHeart>
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-gray-300"></FaRegHeart>
                  )}
                </p>
              </div>
            </div>);
};

export default Movie;