const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const comments = require("./data/comments.json");

const getComments = (req, res) => {
  res.json(
    comments.results.map((comment) => ({
      id: comment.id,
      name: comment.name,
      released: comment.released,
      rating: comment.rating,
      backgroundImage: comment.backgroundImage,
    }))
  );
};

const getOneCommentById = (req, res) => {
  const idComment = parseInt(req.params.id, 10);
  if (Number.isNaN(idComment)) {
    res.sendStatus(404);
  } else {
    const comment = comments.results.find((item) => item.id === idComment);
    if (!comment) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  }
};

router.get("/comments", getComments);
router.get("comments/:id", getOneCommentById);
module.exports = router;
