"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var user_dirService = (function () {
    function user_dirService(http) {
        this.http = http;
    }
    user_dirService.prototype.getUser = function () {
        return this.http.get('http://localhost:3000/api/users').map(function (res) { return res.json(); });
    };
    user_dirService.prototype.addUser = function (newUser) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/user', json.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    user_dirService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.put('http://localhost:3000/api/user' + user._id, json.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    user_dirService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/api/user' + id)
            .map(function (res) { return res.json(); });
    };
    return user_dirService;
}());
user_dirService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], user_dirService);
exports.user_dirService = user_dirService;
//# sourceMappingURL=user-dir.service.js.map