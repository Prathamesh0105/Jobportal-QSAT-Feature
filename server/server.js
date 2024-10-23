// // import express from 'express';
// // import morgan from 'morgan';
// // import cors from 'cors';
// // import { config } from 'dotenv';
// // import router from './router/route.js';


// // /** import connection file */
// // import connect from './database/conn.js';

// // const app = express()


// // /** app middlewares */
// // app.use(morgan('tiny'));
// // app.use(cors());
// // app.use(express.json());
// // config();


// // /** appliation port */
// // const port = process.env.PORT || 8080;


// // /** routes */
// // app.use('/api', router) /** apis */


// // app.get('/', (req, res) => {
// //     try {
// //         res.json("Get Request")
// //     } catch (error) {
// //         res.json(error)
// //     }
// // })


// // /** start server only when we have valid connection */
// // connect().then(() => {
// //     try {
// //         app.listen(port, () => {
// //             console.log(`Server connected to http://localhost:${port}`)
// //         })
// //     } catch (error) {
// //         console.log("Cannot connect to the server");
// //     }
// // }).catch(error => {
// //     console.log("Invalid Database Connection");
// // })

// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import { config } from 'dotenv';
// import router from './router/route.js';
// import connect from './database/conn.js'; // Import database connection

// const app = express();
// const cors = require('cors'); 

// /** App middlewares */
// app.use(morgan('tiny'));
// // app.use(cors({
// //     origin: 'http://localhost:3000',  // You can specify the frontend URL here or leave it open
// //     optionsSuccessStatus: 200
// // }));
// app.use(express.json());
// config(); // Load environment variables
// app.use(cors({
//     origin: 'https://jobportal-qsat-feature-frontend.vercel.app', // Replace with your deployed frontend URL
//     methods: ['GET', 'POST'], // Allow specific methods, e.g., GET and POST
//     credentials: true // Enable if using cookies or sessions
//   }));
// /** Application port */
// const port = process.env.PORT || 8080;

// /** API routes */
// app.use('/api', router);

// /** Home route for testing */
// app.get('/', (req, res) => {
//     try {
//         res.json("Get Request");
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// /** Start server only when we have a valid database connection */
// connect()
//     .then(() => {
//         try {
//             app.listen(port, () => {
//                 console.log(`Server connected to http://localhost:${port}`);
//             });
//         } catch (error) {
//             console.error("Cannot start the server", error);
//         }
//     })
//     .catch(error => {
//         console.error("Database Connection Failed:", error.message);
//     });

// /** Error handling middleware for async functions */
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; // Already imported correctly
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js'; // Import database connection

const app = express();

/** App middlewares */
app.use(morgan('tiny'));
app.use(express.json()); // To parse JSON bodies
config(); // Load environment variables

// CORS configuration for allowing requests from your frontend
app.use(cors({
    origin: 'https://jobportal-qsat-feature-frontend.vercel.app', // Replace with your deployed frontend URL
    methods: ['GET', 'POST'], // Allow specific methods
    credentials: true // Enable if using cookies or sessions
}));

/** Application port */
const port = process.env.PORT || 8080;

/** API routes */
app.use('/api', router); // Use the router for your API routes

/** Home route for testing */
app.get('/', (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

/** Start server only when we have a valid database connection */
connect()
    .then(() => {
        try {
            app.listen(port, () => {
                console.log(`Server connected to http://localhost:${port}`);
            });
        } catch (error) {
            console.error("Cannot start the server", error);
        }
    })
    .catch(error => {
        console.error("Database Connection Failed:", error.message);
    });

/** Error handling middleware for async functions */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
