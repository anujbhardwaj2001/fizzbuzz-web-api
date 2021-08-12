const request = require('supertest');
const app = require('./app');

describe('FizzBuzz API', ()=> {
    it ('GET /fizzbuzz/10 ----> array of fizzbuzz', ()=>{
        return request(app)
        .get('/fizzbuzz/10')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(
                expect.arrayContaining([])
            )
            expect(response.body.data.length).toEqual(10)
        })
    })

    it ('GET /fizzbuzz ---->Status-400 Missing Parameter count', ()=>{
        return request(app)
        .get('/fizzbuzz')
        .expect('Content-Type', /json/)
        .expect(400)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    status: 400,
                    result: expect.any(String)
                })
            )
        })
    })
    
    it ('GET /fizzbuzz/0 ----> Status-400 Validation failed for count', ()=>{
        return request(app)
        .get('/fizzbuzz')
        .expect('Content-Type', /json/)
        .expect(400)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    status: 400,
                    result: expect.any(String)
                })
            )
        })
    })

    it ('GET /fizzbuzz/abc ---->Status-400 count is of type string but should be number', ()=>{
        return request(app)
        .get('/fizzbuzz')
        .expect('Content-Type', /json/)
        .expect(400)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    status: 400,
                    result: expect.any(String)
                })
            )
        })
    })

    it ('GET /unkown ---->Status-404 Not found', ()=>{
        return request(app)
        .get('/unkown')
        .expect('Content-Type', /json/)
        .expect(404)
        
    })

})
