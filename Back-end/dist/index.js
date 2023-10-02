"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("./DB/connection");
const DBmapping_1 = require("./DB/DBmapping");
const conn_1 = __importDefault(require("./DB/DummyDB/conn"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const port = 5000;
const server = http_1.default.createServer(app);
app.use(express_1.default.json());
const apple = {
    "database": "Pometum Apple key",
    "pages": [
        {
            "type": "home",
            "content": [
                {
                    "title": "The Pometum Apple key",
                    "body": {
                        "heading": "",
                        "body": "The key includes 317 varieties of apple, that either are of danish origin or have been widely grown in Denmark. The varieties are part of the collection of apple varieties at the Pometum in Høje Tåstrup, at the Faculty of Science at the University of Copenhagen. The collection is part of NordGen."
                    }
                }
            ]
        },
        {
            "type": "about",
            "content": [
                {
                    "title": "About us",
                    "body": {
                        "heading": "",
                        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                }
            ]
        }
    ],
    "contact": {
        "institution": "University of Copenhagen",
        "institutionWeb": "https://www.ku.dk",
        "department": "Department of Communication",
        "departmentWeb": "https://www.ku.dk/web",
        "team": "Web Development team",
        "email": "ku@ku.dk",
        "phone": 25457889,
        "address": {
            "country": "Denmark",
            "city": "Copenhagen",
            "district": "K",
            "postalCode": 1165,
            "addressDetail": "Nørregade 10"
        }
    },
    "mainEntity": "Apple Species"
};
app.use((0, cors_1.default)({
    credentials: true,
    origin: true
}));
app.get('/apple', (_, res) => {
    res.send(apple);
});
// createDummyApplesTable()
// populateAppleTable()
// createDummyBornholmTable()
// populateBornholmTable()
async function testtest() {
    try {
        (0, DBmapping_1.connectAndGetAllTables)(await conn_1.default).then(res => console.log("-- tables", JSON.stringify(res)));
    }
    catch (error) {
        console.log("oops something went wrong");
    }
}
testtest();
// Example SQL DDL string
// const sqlDDL = `
// CREATE TABLE employees (
//   id INT PRIMARY KEY,
//   department_id INT,
//   FOREIGN KEY (department_id) REFERENCES departments(id)
// );
// CREATE TABLE departments (
//   id INT PRIMARY KEY,
//   name VARCHAR(255)
// );
// CREATE TABLE projects (
//   id INT PRIMARY KEY,
//   department_id INT,
//   FOREIGN KEY (department_id) REFERENCES departments(id)
// );
// `;
(0, connection_1.test)();
server.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map