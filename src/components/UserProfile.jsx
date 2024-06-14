import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSearch } from "../contexts/SearchContext";
import SearchResults from "./SearchResult";

const UserProfile = () => {
  const {
    fullName,
    email,
    avatar,
    setFullName,
    setEmail,
    setNewAvatar,
    handleSave,
    handleLogout,
  } = useAuth();
  const { isSearching } = useSearch();
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewAvatar(e.target.files[0]);
    }
  };

  return (
    <div className="pt-24">
      {isSearching ? (
        <SearchResults />
      ) : (
        <div className="mx-auto flex min-h-[60vh] max-w-md">
          <div className="w-full rounded-md border-[1px] border-slate-400/20 bg-white p-6 shadow">
            <h2 className="mb-4 text-center text-2xl font-semibold">
              Your Profile
            </h2>
            <form className="flex flex-col space-y-6">
              <img
                className="mx-auto rounded-full object-cover"
                src={avatar || "default-avatar-url"}
                alt="Avatar"
                style={{ width: "100px", height: "100px" }}
              />
              <input
                className="w-full border-b-[1px] border-slate-400/30 pb-2 focus:outline-none"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                className="w-full border-b-[1px] border-slate-400/30 pb-2 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />

              <input
                className="hidden"
                type="file"
                id="fileInput"
                onChange={handleFileChange}
              />
              <div className="flex space-x-2">
                <label
                  for="fileInput"
                  className="inline-flex cursor-pointer items-center rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-500"
                >
                  Choose avatar
                </label>
                <button
                  className="flex h-8 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>

            <div className="mt-12">
              <button
                className="flex h-8 w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
