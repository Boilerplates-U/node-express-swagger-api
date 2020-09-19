// serve/app.js

import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cluster from 'cluster';
import app from '../app';
import config from '../config';

let workers = [];

/**
 * Setup number of worker processes to share port which will be defined while setting up server
 */
const setupWorkerProcesses = () => {
    // to read number of cores on system
    let numCores = require('os').cpus().length;
    console.log('Master cluster setting up ' + numCores + ' workers');

    // iterate on number of cores need to be utilized by an application
    for(let i = 0; i < numCores; i++) {
        // these references can be used to receive messages from workers
        workers.push(cluster.fork());

        // to receive messages from worker process
        workers[i].on('message', function(message) {
            console.log(message);
        });
    }

    // process is clustered on a core and process id is assigned
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is listening');
    });

    // if any of the worker process dies then start a new one by simply forking another one
    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
        workers.push(cluster.fork());
        // to receive messages from worker process
        workers[workers.length-1].on('message', function(message) {
            console.log(message);
        });
    });
};

/**
 * Setup an express server and define port to listen all incoming requests for this application
 */
const setUpExpress = () => {

    // create server
    app.server = http.createServer(app);

    // logger
    app.use(morgan('combined'));

    // parse application/json
    app.use(bodyParser.json({
        limit: '2000kb',
    }));
    app.disable('x-powered-by');

    // start server
    app.server.listen(config.APP_PORT, () => {
        let url = `${config.FULL_APP_URL}:${app.server.address().port}`;
        console.log(`Started server on => ${url} for Process Id ${process.pid}`);
    });

    // in case of an error
    app.on('error', (appErr, appCtx) => {
        console.error('app error', appErr.stack);
        console.error('on url', appCtx.req.url);
        console.error('with headers', appCtx.req.headers);
    });
};

/**
 * Setup server either with clustering or without it
 * @param isClusterRequired
 * @constructor
 */
const setupServer = (isClusterRequired) => {

    // if it is a master process then call setting up worker process
    if(isClusterRequired && cluster.isMaster) {
        setupWorkerProcesses();
    } else {
        // to setup server configurations and share port address for incoming requests
        setUpExpress();
    }
};

setupServer(config.clusterMode);

export { app };