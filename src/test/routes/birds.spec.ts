import app from '../../app';
import * as chai from 'chai';
const chaiHttp = require('chai-http');
const server = app.listen()

chai.should();
chai.use(chaiHttp);

describe('/birds endpoint', () => {
    it('should return sorted alphabetically birds /birds GET', (done) => {
        chai.request(server)
            .get('/birds')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });
});
