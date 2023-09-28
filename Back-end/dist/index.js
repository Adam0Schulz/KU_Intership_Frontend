"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const DBApples_1 = require("./DB/DummyDBs/DBApples");
const DBBornholm_1 = require("./DB/DummyDBs/DBBornholm");
const app = (0, express_1.default)();
const port = 5000;
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
(0, DBApples_1.createDummyApplesTable)();
(0, DBApples_1.populateAppleTable)();
(0, DBBornholm_1.createDummyBornholmTable)();
(0, DBBornholm_1.populateBornholmTable)();
const test = async () => {
    //console.log(rows);
};
test();
// async function checkLinkExistence(url: string) {
//     try {
//       const response = await fetch(url, { method: 'HEAD' });
//       if (response.ok) {
//         // Link exists (status code 200 OK)
//         console.log('Link exists.');
//       } else {
//         // Link does not exist (status code indicates an issue)
//         console.log('Link does not exist.');
//       }
//     } catch (error) {
//       // Error occurred while checking the link
//       console.error('Error checking link:', error);
//     }
//   }
// // Example usage:
// const urlToCheck = 'http://192.168.53.168:5000/apple';
// checkLinkExistence(urlToCheck);
// import net from 'net'
// function isHostReachable(host: string, port: number) {
//     return new Promise((resolve) => {
//         const socket = new net.Socket();
//         socket.setTimeout(1000); // Set a timeout for the connection attempt
//         socket.on('connect', () => {
//             socket.destroy(); // Close the socket if the connection is successful
//             resolve(true); // Host is reachable
//         });
//         socket.on('error', (error: any) => {
//             socket.destroy(); // Close the socket in case of an error
//             resolve(false); // Host is not reachable or an error occurred
//         });
//         socket.connect(port, host);
//     });
// }
// // Example usage:
// const host = 'localhost';
// const testPort = 3420; // MySQL default port
// // isHostReachable(host, testPort)
// //     .then((reachable) => {
// //         if (reachable) {
// //             console.log('Host is reachable. You can proceed with MySQL connection setup.');
// //         } else {
// //             console.log('Host is not reachable. Check the host and port.');
// //         }
// //     })
// //     .catch((error) => {
// //         console.error('Error occurred:', error);
// //     });
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map