'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var libraryTransactionsCtrlStub = {
  index: 'libraryTransactionsCtrl.index',
  show: 'libraryTransactionsCtrl.show',
  create: 'libraryTransactionsCtrl.create',
  update: 'libraryTransactionsCtrl.update',
  destroy: 'libraryTransactionsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var libraryTransactionsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './library_transactions.controller': libraryTransactionsCtrlStub
});

describe('LibraryTransactions API Router:', function() {

  it('should return an express router instance', function() {
    libraryTransactionsIndex.should.equal(routerStub);
  });

  describe('GET /api/library_transactionss', function() {

    it('should route to libraryTransactions.controller.index', function() {
      routerStub.get
        .withArgs('/', 'libraryTransactionsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/library_transactionss/:id', function() {

    it('should route to libraryTransactions.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'libraryTransactionsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/library_transactionss', function() {

    it('should route to libraryTransactions.controller.create', function() {
      routerStub.post
        .withArgs('/', 'libraryTransactionsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/library_transactionss/:id', function() {

    it('should route to libraryTransactions.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'libraryTransactionsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/library_transactionss/:id', function() {

    it('should route to libraryTransactions.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'libraryTransactionsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/library_transactionss/:id', function() {

    it('should route to libraryTransactions.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'libraryTransactionsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
