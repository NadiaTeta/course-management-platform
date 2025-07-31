// routes/cohort.routes.js
const express = require('express');
const router = express.Router();
const cohortController = require('../controllers/cohort.controller');

router.post('/', cohortController.createCohort);
router.get('/', cohortController.getAllCohorts);
router.get('/:id', cohortController.getCohortById);
router.put('/:id', cohortController.updateCohort);
router.delete('/:id', cohortController.deleteCohort);

module.exports = router;
