const router = require("express").Router();
const connection = require("../dbConnection");

const getUser = (req, res) => {
  const sql =
    "SELECT id, firstname, lastname, email, password, biography FROM users";
  connection
    .query(sql)
    .then(([users]) => res.json(users))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneUserById = (req, res) => {
  const idUser = parseInt(req.params.id, 10);
  if (Number.isNaN(idUser)) {
    res.sendStatus(404);
  } else {
    const sql =
      "SELECT id, firstname, lastname, email, password, biography FROM users WHERE id = ?";

    connection
      .query(sql, [idUser])
      .then(([users]) => {
        if (users.length > 0) {
          res.json(users[0]);
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

const getLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send("You must provide an email and a password to log in.");
  } else {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    connection
      .query(sql, [email, password])
      .then(([result]) => {
        if (result.length > 0) {
          res.send({ ...result[0], password: "hidden" });
        } else {
          res.send({ message: "Wrong email/password combination!" });
        }
      })
      .catch((err) => res.send({ err }));
  }
};

router.get("/", getUser);
router.get("/:id", getOneUserById);
router.post("/login", getLogin);

module.exports = router;
