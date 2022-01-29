const inquirer = require('inquirer');
const table = require('console.table');
const mysql = require('mysql');

const role = [];
const manager = [];
const first = [];
const employeeList = [];
const departments = [];

var connection = mysql.createConnection({
    host: 'localhost',

    port: 3303,

    user: 'root',

    password: 'Root1234',
    database: 'employee_DB'
});

connection.connect(function (err) {
    if (err) throw err;

    // start the prompt user here
});