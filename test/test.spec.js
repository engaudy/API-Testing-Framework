const expect = require('chai').expect;
const request = require('../helper/requestFactor');
const endpoints = require('../helper/endpoint');

let newPerson;
describe('API Validation CRUD', ()=>{
    
    describe('GET request', ()=>{
        it('Should be return all contracts', async function(){
            let result = await request.getRequest(endpoints.baseUrl, '/Contracts');
            expect(result.statusCode).to.be.equal(200);
            expect(result.body.length).to.be.equal(3);
        });
    });

    describe('POST request', ()=>{
        let postBody = JSON.stringify({
            name: 'Kavitha B',
            country: 'USA',
            phone: '3145679876',
            active: false
        });

        it('Shoul be create a new contract',  async function() {
            let result = await request.postRequest(endpoints.baseUrl, '/Contracts', postBody);
            expect(result.statusCode).to.be.equal(201);
            //console.log(result.body);
            newPerson = result.body.id;
            console.log(newPerson);
        });

        it('Verify all properties when a new contract is ceated',  async function() {
            let result = await request.postRequest(endpoints.baseUrl, '/Contracts', postBody);
            expect(result.body).to.have.property('id').which.is.a('Number');
            expect(result.body).to.have.property('name').which.is.a('String');
            expect(result.body).to.have.property('country').which.is.a('String');
            expect(result.body).to.have.property('phone').which.is.a('String');
            expect(result.body).to.have.property('active').which.is.a('boolean');
            expect(result.body).to.have.property('createdOn').which.is.a('String');
        });
    });
    describe('PUT request', ()=>{
        let putBody = JSON.stringify({
            name: 'Kavitha Updated',
            country: 'Russia'
        });
        it('Should be update a specific contract by id', async function() {
            let result = await request.putRequest(endpoints.baseUrl, '/Contracts/4', putBody);
            expect(result.statusCode).to.be.equal(200);
        });
    });

    describe('DELETE request', ()=>{
        it('Should be delete a specific contract by id', async function() {
            let result = await request.deleteRequest(endpoints.baseUrl, '/Contracts/4');
            expect(result.statusCode).to.be.equal(200);
        });
    });
});