import express from 'express';
import cors from "cors";
import { setUpDBConnections, testCredentials } from "./DB/connection";
import { createDummyApplesTable, populateAppleTable } from './DB/DummyDB/DBApples';
import { createDummyBornholmTable, populateBornholmTable } from './DB/DummyDB/DBBornholm';
import { connectAndGetAllTables } from './DB/DBmapping';
import dummyConn from './DB/DummyDB/conn';
import http from "http";
import {setUp} from "./DB/dbSetup";
import {findDB, findTable} from "./DB/query";

const app = express()
const port = 5000
const server = http.createServer(app);

app.use(express.json())

const apples = {
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
}

app.use(cors({
    credentials: true,
    origin: true
}));

setUpDBConnections().then(()=> console.log('DB standby'));

app.get('/apples', (_, res) => {
    res.send(apples);
})

app.post('/testdb', (req, res) => {
    testCredentials(req.body)
        .then((dbConfig) => {
            console.log(JSON.stringify(dbConfig))
            res.send(dbConfig);
        })
        .catch(err => {
            console.error(err);
            res.send({ "dbConfig": false });
        });
});

app.get('/tables', async (req, res) => {
    const rows = await findTable(findDB(req.query.db as string), req.query.keyword as string);
    const results:string[] = [];
    rows.forEach(row => {
        //console.log(` table: ${row.TABLE_NAME}`)
        results.push(row.TABLE_NAME);
    })
    res.send(results);
});

app.post('/tables/selected', (req, res)=> {
    console.log(`selectedTables: ${req.body.selectedTables}`);
    res.send({test: 'success'});
})

// createDummyApplesTable()
// populateAppleTable()
// createDummyBornholmTable()
// populateBornholmTable()

//test();

//setUp();



server.listen(port, () => console.log(`Running on port ${port}`))
