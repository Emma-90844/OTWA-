import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Total: 4000,
    users: 2000,
  },
  {
    name: "February",
    Total: 3000,
    users: 1000,
  },
  {
    name: "March",
    Total: 2000,
    users: 500,
  },
  {
    name: "April",
    Total: 2780,
    users: 2000,
  },
  {
    name: "May",
    Total: 1890,
    users: 4000,
  },
  {
    name: "June",
    Total: 2390,
    users: 3000,
  },
  {
    name: "July",
    Total: 3490,
    users: 2000,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#84d887" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#84d891" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#users)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
