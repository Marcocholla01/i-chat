import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { useToast } from "../../contexts/ToastContext";

const SearchInput = () => {
  const showToast = useToast();
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    // console.log("search", search);
    if (search.length < 3) {
      return showToast("info", "Info", "Search term must be 3 characters long");
    }

    const conversation = conversations.find(
      (c) =>
        c.fullName.toLowerCase().includes(search.toLocaleLowerCase()) ||
        c.userName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (!conversation) return showToast("error", "Error", "No user found");

    setSelectedConversation(conversation);
    setSearch("");
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full input-info"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="tooltip tooltip-bottom" data-tip="Search">
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
