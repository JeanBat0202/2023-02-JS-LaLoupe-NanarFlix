const router = require("express").Router();

const usersRouter = require("./users.routes");
const commentsRouter = require("./comments.routes");

router.use("/users", usersRouter);
router.use("/comments", commentsRouter);

module.exports = router;
