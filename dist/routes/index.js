"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_1 = __importDefault(require("../controller/get"));
const post_1 = __importDefault(require("../controller/post"));
const update_1 = __importDefault(require("../controller/update"));
const remove_1 = __importDefault(require("../controller/remove"));
const error_handler_1 = __importDefault(require("./error_handler"));
const not_found_1 = __importDefault(require("./not_found"));
const urlEncoded_1 = __importDefault(require("../middleware/urlEncoded"));
const get_2 = __importDefault(require("../middleware/validators/get"));
const remove_2 = __importDefault(require("../middleware/validators/remove"));
const post_2 = __importDefault(require("../middleware/validators/post"));
const update_2 = __importDefault(require("../middleware/validators/update"));
const expressJson_1 = __importDefault(require("../middleware/expressJson"));
const router = express_1.default.Router();
router.get('/', [get_2.default], get_1.default);
router.post('/', [urlEncoded_1.default, expressJson_1.default, post_2.default], post_1.default);
router.put('/', [urlEncoded_1.default, expressJson_1.default, update_2.default], update_1.default);
router.delete('/', [remove_2.default], remove_1.default);
router.use(not_found_1.default);
router.use(error_handler_1.default);
exports.default = router;