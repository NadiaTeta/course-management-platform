const YAML = require('yamljs');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const courseRoutes = require('./routes/course.routes');
const activityRoutes = require('./routes/activityTracker.routes');
const classRoutes = require('./routes/class.routes');
const modeRoutes = require('./routes/mode.routes');
const allocationRoutes = require('./routes/allocation.routes');
const cohortRoutes = require('./routes/cohort.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api', courseRoutes);
app.use('/api/activity-tracker', activityRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/allocations', allocationRoutes);
app.use('/api/modes', modeRoutes);
app.use('/api/cohorts', cohortRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
