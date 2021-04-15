const express = require("express");
const controller = require("../controllers/dashboard.controller");

let router = express.Router();

// Dashboard route
router.get("/", controller.dashboard);

// User routes
router.post("/info", controller.updateUserInfo);

router.get("/user", controller.getUserInfo);
router.get("/users", controller.users);
router.post("/users", controller.createNewStaff);

// Notification routes
router.get("/notification", controller.notification);
router.get("/notification/:id", controller.getNotification);
router.post("/notification", controller.addNewNotification);

// Notification filter and pagination route
router.post("/notification/pagination/:page/:name", controller.notifPagination);

// Post routes
router.get("/post/:postUniqueId", controller.getPost);
router.post("/post", controller.addNewPost);
router.put("/post/edit", controller.editPost);
router.delete("/post/delete/:postUniqueId", controller.deletePost);

// Comment routes
router.get(
    "/post/comment/:postUniqueId/:commentUniqueId",
    controller.getComment
);
router.put("/post", controller.addNewComment);
router.put("/post/comment/edit", controller.editComment);
router.delete(
    "/post/comment/delete/:postUniqueId/:commentUniqueId",
    controller.deleteComment
);

module.exports = router;
