const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RoutesDog = require("./RoutesDog");
// const RouterTemp = require("./routes/RouterTemp");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", RoutesDog);
// router.use("/", RoutesTemp);

module.exports = router;
