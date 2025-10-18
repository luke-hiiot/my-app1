import React from "react";

type Row = {
  rank: string;
  address: string;
  plantPower: string;
};

type Props = {
  rows: Row[];
};

const Leaderboard: React.FC<Props> = ({ rows }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-700/60 bg-gradient-to-b from-[#0f1f2a] to-[#0a1e29]">
      <div className="px-4 py-2 border-b border-gray-700/60 flex items-center">
        <button className="text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
          Total
        </button>
        <button className="ml-2 text-sm px-3 py-1 rounded-full bg-white/5 hover:bg-white/15">
          Weekly
        </button>
      </div>

      <div className="max-h-96 md:max-h-[70vh] overflow-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#1a2a2f] to-[#0e1e20] text-left text-xs uppercase tracking-wider text-gray-300">
              <th className="px-4 py-3 w-1/4">Rank</th>
              <th className="px-4 py-3 w-1/2">Address</th>
              <th className="px-4 py-3 w-1/4">Plant Power</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-700/60 ${idx % 2 === 0 ? "bg-[#0d1e22]" : ""}`}
              >
                <td className="px-4 py-3 text-sm text-gray-200">{r.rank}</td>
                <td
                  className="px-4 py-3 text-sm text-gray-300 truncate"
                  title={r.address}
                >
                  {r.address}
                </td>
                <td className="px-4 py-3 text-sm text-teal-300">
                  {r.plantPower}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
