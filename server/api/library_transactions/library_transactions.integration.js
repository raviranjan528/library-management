'use strict';

var app = require('../..');
import request from 'supertest';

var newLibraryTransactions;

describe('LibraryTransactions API:', function() {

  describe('GET /api/library_transactionss', function() {
    var libraryTransactionss;

    beforeEach(function(done) {
      request(app)
        .get('/api/library_transactionss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          libraryTransactionss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      libraryTransactionss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/library_transactionss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/library_transactionss')
        .send({
          name: 'New LibraryTransactions',
          info: 'This is the brand new libraryTransactions!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLibraryTransactions = res.body;
          done();
        });
    });

    it('should respond with the newly created libraryTransactions', function() {
      newLibraryTransactions.name.should.equal('New LibraryTransactions');
      newLibraryTransactions.info.should.equal('This is the brand new libraryTransactions!!!');
    });

  });

  describe('GET /api/library_transactionss/:id', function() {
    var libraryTransactions;

    beforeEach(function(done) {
      request(app)
        .get('/api/library_transactionss/' + newLibraryTransactions._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          libraryTransactions = res.body;
          done();
        });
    });

    afterEach(function() {
      libraryTransactions = {};
    });

    it('should respond with the requested libraryTransactions', function() {
      libraryTransactions.name.should.equal('New LibraryTransactions');
      libraryTransactions.info.should.equal('This is the brand new libraryTransactions!!!');
    });

  });

  describe('PUT /api/library_transactionss/:id', function() {
    var updatedLibraryTransactions;

    beforeEach(function(done) {
      request(app)
        .put('/api/library_transactionss/' + newLibraryTransactions._id)
        .send({
          name: 'Updated LibraryTransactions',
          info: 'This is the updated libraryTransactions!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLibraryTransactions = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLibraryTransactions = {};
    });

    it('should respond with the updated libraryTransactions', function() {
      updatedLibraryTransactions.name.should.equal('Updated LibraryTransactions');
      updatedLibraryTransactions.info.should.equal('This is the updated libraryTransactions!!!');
    });

  });

  describe('DELETE /api/library_transactionss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/library_transactionss/' + newLibraryTransactions._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when libraryTransactions does not exist', function(done) {
      request(app)
        .delete('/api/library_transactionss/' + newLibraryTransactions._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
