const express = require ("express");

const router = express.Router();

const reporteController = require("../controllers/reporteController");

// GET http:localhost:3000/api/getallReports

router.get("/getAllReport", reporteController.getReportes);

// POST

router.post("/CreateReport", reporteController.createReportes);

module.exports = router;