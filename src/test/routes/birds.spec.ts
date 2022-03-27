import app from '../../app';
import * as chai from 'chai';
const server = app.listen()

chai.should();
chai.use(require('chai-http'));

describe('/birds endpoint', () => {
    it('should return sorted alphabetically birds /birds GET', (done) => {
        chai.request(server)
            .get('/birds')
            .end((err, res) => {
                const sortedBirds = [...res.body].sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                })

                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                chai.expect(sortedBirds).to.eql(res.body)
                done();
            });
    });
});
