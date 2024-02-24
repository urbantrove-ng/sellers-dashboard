import { Link } from "react-router-dom";

export default function DashboardStats({ stats, icon }) {
  return (
    <div className="flex flex-wrap -mx-4 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4 "
        >
          <div className=" bg-purple-100  shadow p-6 text-center rounded-3xl">
            <Link to={stat.link} className="text-blue-500 ">
              <div className="text-4xl mb-4">{stat.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{stat.text}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
