const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let lookup = require('./utils/generateRoutes.js');

let http = require('http');
let parseString = require('xml2js').parseString;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));
const lookupObj = lookup.lookup;

app.get('/lookup/:hash', (req, res) => {
    res.send(lookupObj[req.params.hash]);
});

app.get('/hello', (req, res) => {
    res.send('Hello from heroku');
});

if(!process.env.apikey){
    console.log('No API key for the national rail api has been specified, please get one and set it in your environment variables');
}

app.post('/trains', (request, response) => {

    let from = request.body.from.toUpperCase();
    let to = request.body.to.toUpperCase();
    console.log(from, to);

    let body = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2016-02-16/ldb/">'+
        '<soapenv:Header><typ:AccessToken><typ:TokenValue>'+ process.env.apikey + '</typ:TokenValue></typ:AccessToken></soapenv:Header>'+
        '<soapenv:Body><ldb:GetDepBoardWithDetailsRequest><ldb:numRows>3</ldb:numRows><ldb:crs>'+from+'</ldb:crs><!--Optional:--><ldb:filterCrs>'+ to +'</ldb:filterCrs><!--Optional:--><ldb:filterType>to</ldb:filterType><!--Optional:--><ldb:timeOffset>0</ldb:timeOffset><!--Optional:--><ldb:timeWindow>120</ldb:timeWindow></ldb:GetDepBoardWithDetailsRequest></soapenv:Body></soapenv:Envelope>';

        const postRequest = {
            host: "lite.realtime.nationalrail.co.uk",
            path: "/OpenLDBWS/ldb9.asmx",
            port: 80,
            method: "POST",
            headers: {
                'Cookie': "cookie",
                'Content-Type': 'text/xml',
                'Content-Length': Buffer.byteLength(body),
                'SOAPAction': 'http://thalesgroup.com/RTTI/2015-05-14/ldb/GetDepBoardWithDetails'
            }
        };
        let buffer = "";

        let req = http.request(postRequest, function(res){
            let trainServices;
            res.on( "data", function( data ) { buffer = buffer + data; } );
            res.on( "end", function( data ) {

                parseString(buffer, function (err, result) {
                    result = JSON.stringify(result);
                    result = result.replace(/soap:/g,"");result = result.replace(/xmlns:/g,"");result = result.replace(/lt5:/g,"");result = result.replace(/lt4:/g,"");
                    result = JSON.parse(result);

                    //returns an array of the train services, if there is one then pass it as a variable
                    if(result.Envelope){
                        if (result.Envelope.Body[0].GetDepBoardWithDetailsResponse[0].GetStationBoardResult[0].trainServices){
                            console.log('result', result.Envelope.Body[0].GetDepBoardWithDetailsResponse[0].GetStationBoardResult[0]);
                            trainServices = result.Envelope.Body[0].GetDepBoardWithDetailsResponse[0].GetStationBoardResult[0].trainServices[0].service;
                        }
                    } else {
                        console.log('No response from the API, maybe the token is not being sent');
                    }
                    
                });
                console.log('train', trainServices);
                response.send(trainServices);
            } );

        });
        
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
            response.send('Error');
        });
        req.write( body );
        req.end();

    
});

app.listen(5000, () => console.log('server started listening on', process.env.PORT || 5000));