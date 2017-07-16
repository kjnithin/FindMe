let mongoose = require("mongoose");
let Store = require('../app/models/Store');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../start');
let should = chai.should();

chai.use(chaiHttp);

describe('Stores', () => {
    beforeEach((done) => {
        Store.remove({}, (err) => {
           done();
        });
    });

  /*
  * Test to get the stores
  */
  describe('/GET Stores', () => {
      it('it should GET all the stores', (done) => {
        chai.request(server)
            .get('/stores')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  /*
  * Test to create a store
  */

  describe('/POST store', () => {
      it('it should create the store', (done) => {
        let store = {
            name: "pizza store",
            description: "This is pizza store",
            tags: ['licened','open late'],
            location:{
              coordinates:[34,-32],
              address:'797 doon village road'
            }
        }
        chai.request(server)
            .post('/createStore')
            .send(store)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(true);
              done();
            });
      });

  });
});
