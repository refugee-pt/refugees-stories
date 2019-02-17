const db = require("../data/db.Config.js");
const bcrypt = require("bcryptjs");
const { authenticate, generateToken } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.post("/api/story", postStory);
  server.get("/api/story", authenticate, getStories);
  server.put("/api/approve/:id", authenticate, approveStories);
  server.delete("/api/story/:id", authenticate, deleteStory);
  server.get("/api/stories", publishedStories)
};

function register(req, res) {
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 16);
  credentials.password = hash;
  db("users")
    .insert(credentials)
    .then(ids => {
      const id = ids[0];
      db("users")
        .where({ id })
        .then(user => {
          const token = generateToken(user);
          res.status(201).json({ username: user[0].username, token });
        })
        .catch(err =>
          res.status(500).json({ message: "cant make username or password", err })
        );
    })
    .catch(err => {
      res.status(500).json({ message: "here is another error", err });
    });
}

function login(req, res) {
  const credentials = req.body;
  db("users")
    .where({ username: credentials.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "NOPE STOP!" });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function getStories(req,res) {
  db("story")
  .then(story => {
    res.status(200).json(story)
  })
  .catch(err => {
    res.status(500).json({message: "cant get stories" })
  })
};

function postStory(req, res) {
  db("story")
  .insert(req.body)
  .then(story => {
    res.status(200).json(story)
  })
  .catch(err => {
    res.status(500).json({message: "cant post stories" })
  })
};

function approveStories(req, res)  {
db("story")
.update("approved", true).where("id", req.params.id)
.then(story => {
  res.status(200).json(story)
})
.catch(err => {
  res.status(500).json(err)
})
};

function deleteStory(req,res) {
  db("story")
  .where("id", req.params.id).delete()
  .then(story => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err)
  })
};

function publishedStories(req, res){
  console.log("did this work?")
  db("story")
  .where("approved", true)
  .then(story => { 
    res.status(200).json(story)
  }) 
  .catch(err => {
    res.status(500).json({message: "cant get stories" })
  })

};
