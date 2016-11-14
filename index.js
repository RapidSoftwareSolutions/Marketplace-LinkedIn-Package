"use strict";

global.PACKAGE_NAME = "LinkedIn";

const express       = require('express'),
    bodyParser      = require('body-parser'),
    API             = require('../package.js'),
    fs              = require('fs'),
    lib             = require('./lib'),
    _               = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();

const hasTree       = { 'createSharedContent': true, 'createCompanyShare' : true };

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
    cfile = fs.readFileSync('./control.json',  'utf-8');

let metadata = JSON.parse(mfile),
    control  = JSON.parse(cfile);

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(metadata); });

app.get(`/api/${PACKAGE_NAME}/callback`, (req, res) => {
    console.log(req.params);
});

for(let func in control) {
    let options = {
        parseUri: true
    };
    let {
        method, 
        args,
        url
    } = control[func];

    app.post(`/api/${PACKAGE_NAME}/${func}`, _(function* (req, res) {
        let opts     = {};
        let authopts = {};
        let reqopts  = {};
        let r = {
            callback     : "",
            contextWrites: {}
        };
        let to = req.body.args.to || 'to';
        let response;

        req.body.args = lib.clearArgs(req.body.args);

        try {
            let authopts = {
                type:  'bearer',
                token: req.body.args['accessToken'] || ''
            }

            for(let arg in args) 
                opts[args[arg]] = req.body.args[arg];

            method == 'GET' ? options.query = opts : options.body = opts;
            options.method    = method;
            //options.debug   = true;
            options.hasSkip   = true;
            options.hasTree   = !!hasTree[func];
            //options.xml       = !!hasTree[func] ? {wrapper: 'share'} : false;
            if(!req.body.args['fields']) url = url.replace(':(:fields)', '');
                 
            if(func == 'getAccessToken') {
                opts['grant_type'] = 'authorization_code';
                options.isRawBody  = true;
                authopts = {};
            }

            if(req.body.args['profileLanguage']) 
                reqopts.headers = {'Accept-Language': req.body.args['profileLanguage']};

            response            = yield new API(url, reqopts).auth(authopts).request(options);
            r.callback          = 'success';
            r.contextWrites[to] = response === null ? 'No items.' : response;
        } catch(e) {
            console.log(e)
            r.callback          = 'error';
            r.contextWrites[to] = e.message ? e.message : e;
        }

        res.status(200).send(r);
    }))
}

app.listen(PORT);
module.exports = app;