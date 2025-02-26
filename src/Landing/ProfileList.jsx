import { useState } from "react";
import { FaCopy, FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosUser from "../Hooks/useAxiosUser";

const ProfileList = () => {
  const axiosInstance = useAxiosUser();
  const [search, setSearch] = useState("");

  const { data: accounts = [], isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const res = await axiosInstance.get("/accounts");
      return res.data;
    },
  });

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const filteredAccounts = accounts.filter((acc) =>
    acc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 shadow-md">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name..."
          className="bg-transparent outline-none w-full text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg shadow-md"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map((acc) => (
            <div key={acc.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg relative flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform">
              <img
                src={acc.photoURL || "https://via.placeholder.com/150"}
                alt={acc.name}
                className="w-24 h-24 rounded-full shadow-md mb-4 border-4 border-gray-300 dark:border-gray-700"
              />
              <h2 className="text-xl font-bold mb-1">{acc.name}</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm mb-3">{acc.email}</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {acc.type || "User"}
              </span>
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300"
                onClick={() => copyToClipboard(acc.email)}
              >
                <FaCopy />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
