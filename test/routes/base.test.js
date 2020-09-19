import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

const expect = chai.expect;

describe('GET /status', () => {
    it('should be active', done => {
        chai
        .request(app)
        .get('/status')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res).to.be.html;
            expect(res.text).to.equal('active');
            done();
        });
    });
});