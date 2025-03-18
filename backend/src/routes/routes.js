const express = require("express");
const processoController = require("../controllers/ProcessoController");
const areaController = require("../controllers/areaController");
const subprocessoController = require("../controllers/subprocessoController");
 const userController = require("../controllers/userController");
const loginController = require("../controllers/loginController");
const ValidateToken = require("../middlewares/token");

const router = express.Router();
router.post('/login',loginController.login)
router.post('/user',userController.create)
router.get('/user',userController.listar)

router.get('/user/:id',ValidateToken, userController.ler)
router.put("/user/:id",ValidateToken, userController.update);
router.delete("/user/:id", userController.delete);

router.post("/area", ValidateToken,areaController.create);
router.get("/area", ValidateToken,areaController.listar);
router.get("/area/:id",ValidateToken, areaController.ler);
router.put("/area/:id",ValidateToken, areaController.update);
router.delete("/area/:id", ValidateToken,areaController.delete);

router.post("/processo",ValidateToken, processoController.create);
router.get("/processo", ValidateToken,processoController.listar);
router.get("/processo/:id",ValidateToken, processoController.ler);
router.put("/processo/:id",ValidateToken, processoController.update);

router.post("/subprocesso",ValidateToken, subprocessoController.create);
router.get("/:processoId/subprocesso",ValidateToken, subprocessoController.listar);
router.get("/:processoId/subprocesso/:id", ValidateToken,subprocessoController.ler);
router.put("/subprocesso/:id",ValidateToken, subprocessoController.update);

module.exports=router;