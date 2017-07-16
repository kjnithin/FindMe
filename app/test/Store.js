const mongoose = require('mongoose');
const Store = require('../models/Store');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Stores', ()=>{
  beforeEach((done)=>{
    Store.remove({},(err)=>{
      done();
    });
  });

  describe('/Get Stores',()=>{
    it('Should get all the stores',(done)=>{
      console.log(`server${server}`);
      try{
        chai.request(server)
        .get('/stores')
        .end((err,res)=>{
          console.log(res);
          res.should.have.status(200);
          done();
        });
      }
      catch(err){
        done(err);
      }
    });
  });
})
