import React, { useState } from "react";
import Card from "../components/Card";
import data from "../utils/FoodData.js";

const Home = () => {
  // let foodInfo = data.map((item) => item.card.card.info);
  // console.log(foodInfo);
  const [food, setFood] = useState(data);

  // const ratingsFilter = data.filter(
  //   (item) => item.card.card.info.avgRating > 4);
  // console.log("High rating", ratingsFilter.length);

  function fourRating() {
    const ratingsFilter = data.filter(
      (item) => item.card.card.info.avgRating > 4
    );
    setFood(ratingsFilter);
  }
  function threeRating() {
    const three = data.filter((item) => item.card.card.info.avgRating > 3);
    setFood(three);
  }
  function twoRating() {
    const two = data.filter((item) => item.card.card.info.avgRating > 2);
    setFood(two);
  }
  function OneRating() {
    const one = data.filter((item) => item.card.card.info.avgRating > 1);
    setFood(one);
  }
  function noRating() {
    const no = data.filter((item) => item.card.card.info.avgRating == 0);
    setFood(no);
  }

  return (
    <div className="min-h-screen bg-amber-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        {/* <button className="cursor-pointer py-2 border border-gray-300 rounded-lg bg-amber-600 px-5 m-3 " onClick={rating}>Select Filter</button> */}

        <button
          className="cursor-pointer py-2 border border-gray-300 rounded-lg  bg-black px-5 m-3"
          value={data}
          onClick={fourRating}
        >
          ⭐⭐⭐⭐
        </button>

        <button
          className="cursor-pointer py-2 border border-gray-300 rounded-lg bg-black px-5 m-3"
          value={data}
          onClick={threeRating}
        >
          ⭐⭐⭐
        </button>

        <button
          className="cursor-pointer py-2 border border-gray-300 rounded-lg bg-black px-5 m-3"
          value={data}
          onClick={twoRating}
        >
          ⭐⭐
        </button>

        <button
          className="cursor-pointer py-2 border border-gray-300 rounded-lg bg-black px-5 m-3"
          value={data}
          onClick={OneRating}
        >
          ⭐
        </button>

        <button
          className="cursor-pointer py-2 border border-gray-300 rounded-lg  bg-black px-5 m-3"
          value={data}
          onClick={noRating}
        >
          O⭐ratings
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {food.map((item) => {
            const info = item.card.card.info;
            return (
              <Card
                key={info.id || info.name}
                cost={info.costForTwoMessage}
                name={info.name}
                imageId={info.cloudinaryImageId}
                rating={info.avgRating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
  // return (
  //   <>
  //   <div className="container bg-amber-300 min-h-4 w-full">
  //       <div className="card-item">
  //          <input type="text" />
  //       </div>
  //       {/* render card here */}
  //       {data.map((item)=> {
  //           const info = item.card.card.info;
  //           return (
  //               <Card
  //                key={info.id || info.name}
  //                 cost={info.costForTwoMessage}
  //                 name={info.name}
  //                  imageId={info.cloudinaryImageId}
  //                  rating={info.avgRating}
  //               />
  //           )
  //       })}
  //   </div>
  //   </>
  // )
};

export default Home;
