let mongoose = require("mongoose");
let Store = require('../app/models/User');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../start');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        Store.remove({}, (err) => {
           done();
        });
    });


    /*
    * Test to Registering User
    */

    describe('/Register Users', () => {
        it('it should register user', (done) => {
          let user = {
            'name':"Nithin",
            'email':"kjnithin89@gmail.com",
            'password' :"admin123",
            'passwordConfirm':"admin123"
          }
          chai.request(server)
              .post('/api/register')
              .send(user)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('name').eql('Nithin');
                  res.body.should.have.property('email').eql('kjnithin89@gmail.com');
                done();
              });
        });
      });

        /*
        * Test to logout user
        */

        describe('/logout user', () => {
            it('it should logout the user', (done) => {
              chai.request(server)
                  .get('/api/logout')
                  .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('success').eql(true);
                      res.body.should.have.property('message').eql('successfully Logged out');
                    done();
                  });
            });
        });

        /*
        * Test to login user
        */

        describe('/login user', () => {
            it('it should login the user', function(done) {
              this.timeout(10000);
              let user = {
                'email':"kjnithin14@gmail.com",
                'password' :"admin123"
              }
              chai.request(server)
                  .post('/api/login')
                  .send(user)
                  .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('name').eql('Nithin');
                      res.body.should.have.property('email').eql('kjnithin14@gmail.com');
                    done();
                  });
            });
          });

          /*
          * Test to login with google auth
          */

          describe('/google auth', () => {
              it('it should authenticate the user using google', function(done) {

                let user = {
                  'email':"kjnithin@gmail.com",
                }
                chai.request(server)
                    .post('/api/auth')
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(200);
                      done();
                    });
              });
            });

    });
