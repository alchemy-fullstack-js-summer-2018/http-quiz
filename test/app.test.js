const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it('Gets a list of penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.deepEqual(res.body, ['bernice', 'bernard']);
            });
    });

    it('Returns penguin bernice with full properties when format=full', () => {
        return chai.request(app)
            .get('/api/penguins/king?format=full')
            .then(res => {
                assert.deepEqual(res.body, { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('Returns penguin bernice with just name property when format=simple', () => {
        return chai.request(app)
            .get('/api/penguins/king?format=simple')
            .then(res => {
                assert.deepEqual(res.body, { name: 'bernice' });
            });
    });

    it('responds with 404 on not found', () => {
        return chai.request(app)
            .get('/sad-path')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /CANNOT/);
            });
    });

    // it('returns <p>All tracks recovered</p> on DELETE /mistake', () => {
    //     return chai.request(app)
    //         .del('/api/mistake')
    //         .then(res => {
    //             assert.equal(res.text, '<p>All tracks recovered</p>');
    //         });
    // });
});