const express = require("express");
const controller = require("../controllers/dashboard.controller");

let router = express.Router();

router.get("/", controller.dashboard);

router.post("/info", controller.updateUserInfo);

router.get("/user", controller.getUserInfo);
router.get("/users", controller.users);
router.post("/users", controller.createNewStaff);

router.get("/notification", controller.notification);
router.get("/notification/:id", controller.getNotification);
router.get("/notification/list/:name", controller.getNotificationList);
router.post("/notification", controller.addNewNotification);

router.get("/post/:postUniqueId", controller.getPost);
router.post("/post", controller.addNewPost);
router.put("/post/edit", controller.editPost);
router.delete("/post/delete/:postUniqueId", controller.deletePost);

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
