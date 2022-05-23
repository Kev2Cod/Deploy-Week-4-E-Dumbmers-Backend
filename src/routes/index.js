const express = require("express");

const router = express.Router();

const { addUser, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");
const { addTransaction, getTransactions, getTransaction, notification } = require("../controllers/transaction");
const { getArtis, addArtis } = require("../controllers/artis");
const { historys, getHistory } = require("../controllers/history");
const { register, login, checkAuth } = require("../controllers/auth");
const { likeById, likelike } = require("../controllers/like");
const { musics, addMusic } = require("../controllers/music");
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

// Users
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);

// Music
// router menampikan data
router.get("/musics", musics);
router.post("/add-music", uploadFile("imageSong", "fileSong"), addMusic);

// Like
router.post("/like", auth, likelike);
router.get("/like/:id", likeById);

// Artis
router.get("/artis", getArtis);
router.post("/add-artis", addArtis); // must ad auth

// History
router.post("/history", historys);
router.get("/history/:id", getHistory);

// Transaction
router.get("/transactions", auth, getTransactions);
router.post("/transaction", auth, addTransaction);

// Login & Register
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth/", auth, checkAuth);

// Notification for midrans
router.post("/notification", notification);

module.exports = router;
