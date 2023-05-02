import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [password, setPassword] = useState("");
  const [offerUrl, setOfferUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/get-approved");
      setIsApproved(response.data.isApproved);
      const response2 = await axios.get("/api/get-offerurl");
      setOfferUrl(response2.data.offerUrl);
    }

    fetchData();
  }, []);

  const updateApproved = async () => {
    try {
      await axios.post("/api/set-approved", {
        isApproved: !isApproved,
        password,
      });
      setIsApproved(!isApproved);
      setPassword("");
    } catch (e) {
      alert("Incorrect password");
    }
  };

  const updateOfferUrl = async () => {
    try {
      await axios.post("/api/set-offerurl", {
        offerUrl,
        password,
      });
      setOfferUrl(offerUrl);
      setPassword("");
    } catch (e) {
      alert("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-1/2">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <div className="mt-8">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isApproved"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    checked={isApproved}
                    onChange={updateApproved}
                  />
                  <label htmlFor="isApproved" className="text-gray-700">
                    Show real offer
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="offerUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Offer URL
                  </label>
                  <input
                    type="text"
                    id="offerUrl"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-black rounded-md border-2"
                    onChange={(e) => setOfferUrl(e.target.value)}
                    value={offerUrl}
                  />
                  <button
                    className="bg-black text-white mt-3 mx-auto rounded-xl font-sans p-2 text-center"
                    onClick={updateOfferUrl}
                    value={offerUrl}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-black rounded-md border-2"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
