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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var user_dir_service_1 = require("./user-dir.service");
var index_1 = require("../services/index");
var user_dirComponent = (function () {
    function user_dirComponent(modalService, userService) {
        this.modalService = modalService;
        this.userService = userService;
    }
    // add new user
    user_dirComponent.prototype.add_user = function (user_name) {
        var _this = this;
        var user = { user_name: add_username, contact: add_contact, address: add_address, email: add_email };
        this.userService.addUser(user)
            .subscribe((function (user) {
            _this.users.push(user);
        }));
    };
    //get users list
    user_dirComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bodyText = 'This text can be updated in modal 1';
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    //edit the user details
    user_dirComponent.prototype.edit_user = function (user) {
        var user = { _id: user._id, user_name: edit_username, contact: edit_contact, address: edit_address, email: edit_email };
        this.userService.updateUser(user);
    };
    //delete the user details
    user_dirComponent.prototype.delete_user = function (id) {
        var users = this.users;
        this.userService.deleteUser(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 1; i < users.length; i++) {
                    if (users[i]._id == id) {
                        users.splice(i, 1);
                    }
                }
            }
        });
    };
    user_dirComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    user_dirComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    return user_dirComponent;
}());
user_dirComponent = __decorate([
    core_1.Component({
        selector: 'user-dir',
        templateUrl: './user-dir.component.html',
        styleUrls: ['./user-dir.component.css'],
        providers: [
            { provide: 'ModalService' },
            { provide: 'user_dirService' }
        ]
    }),
    __param(0, Inject('ModalService')),
    __param(1, Inject('user_dirService')),
    __metadata("design:paramtypes", [index_1.ModalService,
        user_dir_service_1.user_dirService])
], user_dirComponent);
exports.user_dirComponent = user_dirComponent;
//# sourceMappingURL=user-dir.component.js.map