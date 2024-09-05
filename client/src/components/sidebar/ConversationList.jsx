import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import Loader from "../Loader";
import { getRandomEmoji } from "../../utils/emoji";

const ConversationList = () => {
  const { loading, conversations } = useGetConversations();
  // console.log("conversations", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations?.length - 1}
        />
      ))}
      {loading ? <Loader /> : null}
    </div>
  );
};

export default ConversationList;
