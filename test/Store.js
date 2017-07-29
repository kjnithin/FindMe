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
            .get('/api/stores')
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

  // describe('/POST store', () => {
  //     it('it should create the store', (done) => {
  //       let store = {
  //           name: "pizza store",
  //           description: "This is pizza store",
  //           tags: ['licened','open late'],
  //           location:{
  //             coordinates:[34,-32],
  //             address:'797 doon village road'
  //           }
  //       }
  //       chai.request(server)
  //           .post('/api/createStore')
  //           .send(store)
  //           .end((err, res) => {
  //             console.log(res.body);
  //               res.should.have.status(200);
  //               res.body.should.be.a('object');
  //               res.body.should.have.property('success').eql(true);
  //             done();
  //           });
  //     });
  //   });

    /*
    * Test to get a store by slug
    */

    // describe('/GET/:slug store', () => {
    //   it('it should GET a store by the given slug', (done) => {
    //     let store = new Store({
    //       name: "pizza store",
    //       description: "This is pizza store",
    //       tags: ['licened','open late'],
    //       location:{
    //         coordinates:[34,-32],
    //         address:'797 doon village road'
    //       },
    //         owner:123456
    //     });
    //     store.save((err, store) => {
    //         chai.request(server)
    //         .get('/api/store/' +store.slug)
    //         .send(store)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('name');
    //             res.body.should.have.property('description');
    //             res.body.should.have.property('tags');
    //           done();
    //         });
    //     });
    //   });
    // });

    /*
    * Test to get a store by id
    */

//     describe('/GET/:id store', () => {
//       it('it should GET a store by the given id', (done) => {
//         let store = new Store({
//           name: "pizza store",
//           description: "This is pizza store",
//           tags: ['licened','open late'],
//           location:{
//             coordinates:[34,-32],
//             address:'797 doon village road'
//           },
//             owner:123456
//         });
//         store.save((err, store) => {
//             chai.request(server)
//             .get('/api/storebyid/' +store.id)
//             .send(store)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('name');
//                 res.body.should.have.property('description');
//                 res.body.should.have.property('tags');
//               done();
//             });
//         });
//       });
//     });
});
