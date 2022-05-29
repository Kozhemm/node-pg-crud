const Router = require("express");
const customerController = require("../controllers/CustomerController.js");
const router = new Router();

router.post("/customer-create", customerController.create);
router.put("/customer", customerController.update);
router.delete("/customer/:id", customerController.delete);
router.get("/customer", customerController.showAll);
router.get("/customer/:id", customerController.showOne);

module.exports = router;
