const moleculesRouter = require("express").Router();
const pool = require("../db/conf");

moleculesRouter.get("/", (req, res) => {
  pool
    .query("SELECT * FROM molecules")
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(500));
});

moleculesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM molecules WHERE id = $1", [id])
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(500));
});

moleculesRouter.post("/", (req, res) => {
  const { content, note } = req.body;
  pool
    .query("INSERT INTO molecules(content, note) VALUES($1, $2) RETURNING *", [
      content,
      note,
    ])
    .then((data) => res.status(201).json(data))
    .catch((e) => res.sendStatus(404));
});

moleculesRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { content, note } = req.body;

  pool
    .query(
      `UPDATE molecules
	SET content = $2, note = $3 
	WHERE id=$1
	RETURNING *`,
      [id, content, note]
    )
    .then((data) => res.status(201).json(data))
    .catch((e) => res.sendStatus(404));
});

moleculesRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM molecules WHERE id = $1", [id])
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(500));
});

module.exports = moleculesRouter;
