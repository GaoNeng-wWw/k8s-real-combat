/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const user_controller_1 = __webpack_require__(4);
const user_service_1 = __webpack_require__(5);
const db_1 = __webpack_require__(13);
const mongoose_1 = __webpack_require__(8);
const schema_1 = __webpack_require__(6);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            db_1.DbModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.User.name,
                    collection: schema_1.User.name.toLowerCase(),
                    schema: schema_1.UserSchema,
                },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(3);
const user_service_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(10);
const user_1 = __webpack_require__(11);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    ListUsers(data) {
        return this.userService.listUsers(data);
    }
    GetUser(data) {
        return this.userService.getUser(data);
    }
    CreateUser(data) {
        return this.userService.createUser(data);
    }
    UpdateUser(data) {
        return this.userService.updateUser(data);
    }
    DeleteUser(data) {
        return this.userService.deleteUserRequest(data);
    }
};
exports.UserController = UserController;
__decorate([
    (0, microservices_1.GrpcMethod)('UserService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_1.ListUserReuqest !== "undefined" && user_1.ListUserReuqest) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "ListUsers", null);
__decorate([
    (0, microservices_1.GrpcMethod)('UserService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_1.GetUserRequest !== "undefined" && user_1.GetUserRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "GetUser", null);
__decorate([
    (0, microservices_1.GrpcMethod)('UserService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_1.CreateUserRequest !== "undefined" && user_1.CreateUserRequest) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "CreateUser", null);
__decorate([
    (0, microservices_1.GrpcMethod)('UserService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof user_1.UpdateUserRequest !== "undefined" && user_1.UpdateUserRequest) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "UpdateUser", null);
__decorate([
    (0, microservices_1.GrpcMethod)('UserService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof user_1.DeleteUserRequest !== "undefined" && user_1.DeleteUserRequest) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "DeleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const schema_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(9);
let UserService = class UserService {
    constructor(User) {
        this.User = User;
    }
    async listUsers(data) {
        const { offset, limit } = data;
        const users = await this.User.find()
            .limit(limit)
            .skip(offset)
            .exec();
        const total = await this.User.count().exec();
        return {
            users,
            total,
        };
    }
    async getUser(data) {
        const { email } = data;
        return this.User.findOne({ email }).exec();
    }
    async createUser(data) {
        const user = new this.User(data);
        return (await user.save()).toObject();
    }
    async updateUser(data) {
        const { email, user } = data;
        return await this.User.findOneAndUpdate({ email }, { $set: Object.assign({}, user) })
            .lean()
            .exec();
    }
    async deleteUserRequest(data) {
        const { email } = data;
        await this.User.deleteOne({ email }).exec();
        return;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(8);
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "nick", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true, _id: false })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteUserRequest = exports.UpdateUserRequest = exports.CreateUserRequest = exports.GetUserRequest = exports.ListUserReuqest = void 0;
const schema_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(12);
class ListUserReuqest {
}
exports.ListUserReuqest = ListUserReuqest;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListUserReuqest.prototype, "offset", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListUserReuqest.prototype, "limit", void 0);
class GetUserRequest {
}
exports.GetUserRequest = GetUserRequest;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetUserRequest.prototype, "email", void 0);
class CreateUserRequest {
}
exports.CreateUserRequest = CreateUserRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "nick", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "password", void 0);
class UpdateUserRequest {
}
exports.UpdateUserRequest = UpdateUserRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUserRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", typeof (_a = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _a : Object)
], UpdateUserRequest.prototype, "user", void 0);
class DeleteUserRequest {
}
exports.DeleteUserRequest = DeleteUserRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], DeleteUserRequest.prototype, "email", void 0);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
let DbModule = class DbModule {
};
exports.DbModule = DbModule;
exports.DbModule = DbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory() {
                    return {
                        uri: 'mongodb://127.0.0.1:27017/?directConnection=true',
                        connectTimeoutMS: 500,
                        socketTimeoutMS: 500,
                        waitQueueTimeoutMS: 500,
                        serverSelectionTimeoutMS: 500,
                    };
                },
            }),
        ],
    })
], DbModule);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("path");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const user_module_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(10);
const path_1 = __webpack_require__(15);
const common_1 = __webpack_require__(3);
async function bootstrap() {
    const url =  true && 'localhost:3000' !== void 0 ? 'localhost:3000' : process.env.USER_URL;
    const app = await core_1.NestFactory.createMicroservice(user_module_1.UserModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            url,
            package: 'User',
            protoPath: (0, path_1.join)(__dirname, 'proto/UserService.proto'),
        },
    });
    common_1.Logger.log(`App start at ${url}`);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen();
}
bootstrap();

})();

/******/ })()
;