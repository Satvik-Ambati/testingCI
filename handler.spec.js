const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();
//var expect = require('chai').expect;

const handler = require('./handler');

describe("The handler function", () => {
    it("returns a message", () => {
        handler.hello(undefined, undefined, function(error, response){
            let body = JSON.parse(response.body);
            /body.message.should.be.equal('Go Serverless v1.0! Your function executed successfully! lo');
            //expect(body.message).to.equal('Go Serverless v1.0! Your function executed successfully!');
            //done();
        });
    });
});
