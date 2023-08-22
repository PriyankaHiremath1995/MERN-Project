const asyncHandler = require("express-async-handler") ;
const Messages = require("../models/messageModel");

const getMessages = asyncHandler(async (req,res) => {
    const messages = await Messages.find({user: req.user._id});
    res.json(messages)
})

const getAllMessages = asyncHandler(async (req,res) => {
    const messages = await Messages.find();
    res.json(messages)
})

const createMessage = asyncHandler(async (req, res) => {
    const { title, content} = req.body;
  
    if (!title || !content) {
      res.status(400);
      throw new Error("Please Fill all the feilds");
      return;
    } else {
      const note = new Messages({ user: req.user._id, title, content });
  
      const createdNote = await note.save();
  
      res.status(201).json(createdNote);
    }
  });

  const getMessageById = asyncHandler(async (req, res) => {
    const message = await Messages.findById(req.params.id);
  
    if (message) {
      res.json(message);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  
    res.json(message);
  });

  const updateMessage = asyncHandler(async (req, res) => {
    const { title, content} = req.body;
  
    const message = await Messages.findById(req.params.id);
  
    if (message.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (message) {
        message.title = title;
        message.content = content;
  
      const updatedMessage = await message.save();
      res.json(updatedMessage);
    } else {
      res.status(404);
      throw new Error("Note not found");
    }
  });

  const deleteMessage = asyncHandler(async (req, res) => {
    const message = await Messages.findById(req.params.id);
  
    if (message.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (message) {
      await message.deleteOne();
      res.json({ message: "Note Removed" });
    } else {
      res.status(404);
      throw new Error("Note not Found");
    }
  });

module.exports = {getMessages, createMessage, getMessageById, updateMessage, deleteMessage, getAllMessages}