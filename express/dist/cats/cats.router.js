"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cats_service_1 = require("./cats.service");
var router = express_1.Router();
router.get("/cats", cats_service_1.readAllcat);
router.get("/cats/:name", cats_service_1.readPartialCat);
router.post("/cats", cats_service_1.createCat);
router.put("/cats/:name", cats_service_1.updateAllCat);
router.patch("/cats/:name", cats_service_1.updatePartialCat);
router.delete("/cats/:name", cats_service_1.deleteCat);
exports.default = router;
//# sourceMappingURL=cats.router.js.map