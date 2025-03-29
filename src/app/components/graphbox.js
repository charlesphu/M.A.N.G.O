"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample mock financial data for each time range
const sampleData = {
  day: [
    { time: "9AM", value: 1200 },
    { time: "12PM", value: 1250 },
    { time: "3PM", value: 1230 },
    { time: "6PM", value: 1280 },
  ],
  week: [
    { time: "Mon", value: 1200 },
    { time: "Tue", value: 1300 },
    { time: "Wed", value: 1250 },
    { time: "Thu", value: 1350 },
    { time: "Fri", value: 1450 },
  ],
  month: [
    { time: "Week 1", value: 1200 },
    { time: "Week 2", value: 1400 },
    { time: "Week 3", value: 1350 },
    { time: "Week 4", value: 1500 },
  ],
  year: [
    { time: "Jan", value: 1200 },
    { time: "Apr", value: 1800 },
    { time: "Jul", value: 1600 },
    { time: "Oct", value: 2000 },
  ],
};

export default function Graphbox() {
  const [range, setRange] = useState("month");
  const data = sampleData[range];

  const isGain = data[data.length - 1].value >= data[0].value;
  const lineColor = isGain ? "#22c55e" : "#ef4444"; // green if up, red if down

  return (
    <div style={{ width: "100%", height: "300px", marginBottom: "2rem" }}>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
        {["day", "week", "month", "year"].map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            style={{
              padding: "0.25rem 0.75rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: range === r ? "#000" : "#fff",
              color: range === r ? "#fff" : "#000",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
