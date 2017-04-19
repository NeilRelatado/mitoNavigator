var assert = require('chai').assert;
var search = require('../Search')
var password =require('../Password')
var username = require('../Username')
var type = require ('../Admin')
var time = require ('../sessiontime')

describe('Search',function () {
it('MNGIE should be displayed',function(){
assert.equal(search() ,'MNGIE');
}); 
});

describe('Password',function () {
it('Password matches',function(){
assert.equal(password() ,'Password123');
}); 
});

describe('Password Length',function () {
it('Password is of correct length',function(){
Password= 'Password123';
assert.lengthOf(Password,'11');
}); 
});

describe('Username',function () {
it('Username matches',function(){
assert.equal(username() ,'Username123');
}); 
});

describe('Admin Check',function () {
it('User is an admin',function(){
assert.equal(type() ,'Admin');
}); 
});

describe('Session time',function () {
it('Session will end when timer reaches 1000',function(){
assert.equal(time() ,1000);
}); 
});




