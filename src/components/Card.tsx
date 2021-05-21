import React from "react";

const Card: React.FC<any> = ({ image, data }) => {
  return (
    <div className="flex items-center max-w-md">
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-4 grid-flow-row-dense sm:grid-cols-2">
          <div className="col-span-full">
            <h1 className="mt-6 text-2xl font-bold text-gray-900">
              <span className="text-blue-400">Day {data.day}: </span>{" "}
              {data.place}
            </h1>
          </div>
          <div className="">
            <div className="relative h-0 pb-2/3 sm:pt-2/3">
              <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover  rounded-lg shadow-xl "
                alt="camino"
              />
            </div>
          </div>
          <div className="text-gray-600">
            <ul>
              <li>
                <i className="fa fa-map-signs"></i> {data.distance}
              </li>
              <li>
                <i className="fa fa-hotel"></i> Ночуем в{" "}
                <a href={data.hotel.link} className="text-blue-600">
                  {data.hotel.name}
                </a>
              </li>
              {data.food.map((food: any) => {
                return (
                  <li>
                    <i className="fa fa-cutlery"></i>{" "}
                    {food.link ? (
                      <a href={food.link} className="text-blue-600">
                        {food.name}
                      </a>
                    ) : (
                      food.name
                    )}
                  </li>
                );
              })}
              {data.routes.map((route: any) => {
                return (
                  <li>
                    <i className="fa fa-map"></i>{" "}
                    <a href={route.link} className="text-blue-600">
                      {route.name}
                    </a>
                  </li>
                );
              })}
              {data.poi.map((p: any) => {
                return (
                  <li>
                    <i className="fa fa-map-marker"></i>{" "}
                    {p.link ? (
                      <a href={p.link} className="text-blue-600">
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
