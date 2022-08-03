const supertest = require('supertest');

exports.getRequest = async(baseUrl, apiEndPoint)=>{
    try{
        let res = await supertest(baseUrl).get(apiEndPoint).retry(2)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
        return res;

    }catch(err){
        console.log('Issue with GET: ', err)
    }
}

exports.postRequest = async(baseUrl, apiEndPoint, requestBody)=>{
    try{
        let res = await supertest(baseUrl).post(apiEndPoint).retry(2)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(requestBody);
        return res;
    }catch(err){
        console.log('Issue with POST: ', err)
    }
}

exports.putRequest = async(baseUrl, apiEndPoint, requestBody)=>{
    try{
        let res = await supertest(baseUrl).put(apiEndPoint).retry(2)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(requestBody);
        return res;
    }catch(err){
        console.log('Issue with PUT: ', err)
    }
}

exports.deleteRequest = async(baseUrl, apiEndPoint)=>{
    try{
        let res = await supertest(baseUrl).delete(apiEndPoint).retry(2)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
        return res;
    }catch(err){
        console.log('Issue with DELETE: ', err)
    }
}