const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

//C# Quiz Endpoints
const getAllCSharp = (req, res) => {
  mongodb
    .getDb()
    .collection("csharp")
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
};

const getSingleCSharp = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res
      .status(400)
      .json({ message: "Must use a valid id to find a question." });
  }
  const questionId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .collection("csharp")
    .find({ _id: questionId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result[0]);
    });
};

const createQuestionCSharp = async (req, res) => {
  const question = {
    question: req.body.question,
    choices: req.body.choices,
    answer: req.body.answer,
  };
  const response = await mongodb
    .getDb()
    .collection("csharp")
    .insertOne(question);
    if(response.acknowledged){
        res.status(201).json({message: "Question created successfully."});
    }else {
        res.status(500).json(response.error || {message: "Unknown server error."});
    }
};

const updateQuestionCSharp = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Must use a valid id to update." });
    }
    const questionId = new ObjectId(req.params.id);
    const question = {
        question: req.body.question,
        choices: req.body.choices,
        answer: req.body.answer,
    };
    const response = await mongodb
        .getDb()
        .collection("csharp")
        .replaceOne({ _id: questionId }, { $set: question });
        if(response.modifiedCount > 0){
            res.status(204).send();
        }else {
            res.status(500).json(response.error || {message: "Unknown server error."});
        }
    };

const deleteQuestionCSharp = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Must use a valid id to delete." });
    }
    const questionId = new ObjectId(req.params.id);
    const response = await mongodb
        .getDb()
        .collection("csharp")
        .remove({ _id: questionId }, true);
        if(response.deletedCount > 0){
            res.status(204).send();
        }else {
            res.status(500).json(response.error || {message: "Unknown server error."});
        }
    };


    //TypeScript Quiz Endpoints

    module.exports = {
        getAllCSharp,
        getSingleCSharp,
        createQuestionCSharp,
        updateQuestionCSharp,
        deleteQuestionCSharp
    };
