var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-type-email');

export class User{
    _id: string;
    user_name: string;
    email: string;
    contact: number;
    address: string;
}