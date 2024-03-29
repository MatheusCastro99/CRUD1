const express = require("express");
const {
  getCustomer,
  getCustomerByID,
  postCustomer,
  updateCustomer,
  delCustomer,
} = require("../controllers/customerController");

const router = express.Router();

//This file contains server functionalities

//CREATE
router.post("/", postCustomer);

//READ
router.get("/", getCustomer);

router.get("/:id", getCustomerByID);

//UPDATE
router.put("/:id", updateCustomer);

//DELETE
router.delete("/:id", delCustomer);

module.exports = router;
