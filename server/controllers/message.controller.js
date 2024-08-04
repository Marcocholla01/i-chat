const { conversationModel } = require("../models/conversation.model");
const { messageModel } = require("../models/message.model");

// Send Message
exports.sendMessage = async (req, res) => {
  const { message } = req.body;
  const { recieverId } = req.params;
  const { _id: senderId } = req.auth;
  try {
    let conversation = await conversationModel.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    // if no conversation create one
    if (!conversation) {
      conversation = await conversationModel.create({
        participants: [senderId, recieverId],
      });
    }

    // craete message
    const newMessage = new messageModel({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // TODO ADD SOCKET.IO Functionality here

    // concurent running one after another
    // await conversation.save();
    // await newMessage.save();

    // For optimzing (parallel running // running all at once)
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({ message: newMessage });
  } catch (error) {
    console.log(`Error in sendMessage controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};

// Get Messages of logged in user
exports.getMessages = async (req, res) => {
  const { recieverId } = req.params;
  const { _id: senderId } = req.auth;

  try {
    const conversation = await conversationModel
      .findOne({ participants: { $all: [senderId, recieverId] } })
      .populate("messages");

    if (!conversation)
      return res.status(200).json({ success: true, messages: [] });

    const messages = conversation.messages;
    res.status(200).json({ success: true, messages: conversation.messages });
  } catch (error) {
    console.log(`Error in grtMessages controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};
