const router = require("express").Router();
const connection = require("../dbConnection");

const getComments = (req, res) => {
  const sql = "SELECT * FROM comments";
  connection
    .query(sql)
    .then(([comments]) => res.json(comments))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getIdMovie = (req, res) => {
  const idMovie = parseInt(req.params.idMovie, 10);
  if (Number.isNaN(idMovie)) {
    res.sendStatus(404);
  } else {
    const sql = "SELECT * FROM comments WHERE idMovie = ?";
    connection
      .query(sql, [idMovie])
      .then(([result]) => {
        if (result.length > 0) {
          res.json([...result]);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const addComment = (req, res) => {
  const { idMovie, reviewer, comment, avatarImage } = req.body;
  if (!reviewer || !comment) {
    return res.sendStatus(422);
  }

  const sql =
    "INSERT INTO comments (idMovie, reviewer, comment, avatarImage) VALUES (?, ?, ?, ?)";

  return connection
    .query(sql, [idMovie, reviewer, comment, avatarImage])
    .then(([result]) => {
      return res.status(201).json({
        id: result.insertId,
        idMovie,
        reviewer,
        comment,
        avatarImage,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

// const deleteComment = (req, res) => {
//   const idComment = parseInt(req.params.id, 10);
//   if (Number.isNaN(idComment)) {
//     res.sendStatus(422);
//   } else {
//     const sql = "DELETE FROM comments WHERE id= ?";
//     connection.query(sql, [idComment]).then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.sendStatus(204);
//       }
//     });
//   }
// };

router.get("/", getComments);
router.get("/:idMovie", getIdMovie);
router.post("/", addComment);
// router.get("/:id", getOneCommentById);

// router.delete("/:id", deleteComment);

module.exports = router;
