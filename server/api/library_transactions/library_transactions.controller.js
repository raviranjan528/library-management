/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/library_transactionss              ->  index
 * POST    /api/library_transactionss              ->  create
 * GET     /api/library_transactionss/:id          ->  show
 * PUT     /api/library_transactionss/:id          ->  update
 * DELETE  /api/library_transactionss/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import LibraryTransactions from './library_transactions.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of LibraryTransactionss
export function index(req, res) {
  return LibraryTransactions.find().populate('book member').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single LibraryTransactions from the DB
export function show(req, res) {
  return LibraryTransactions.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new LibraryTransactions in the DB
export function create(req, res) {

  var newDate = new Date();
  newDate.setDate(newDate.getDate() + 15);

  console.log('New Date ::' + newDate);

  var labTrans = new LibraryTransactions();

  labTrans.status = req.body.status;
  labTrans.lastDate = newDate;
  labTrans.book = req.body.bookId;
  labTrans.member = req.body.memberId;

  labTrans.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: 'Something Wrong'
      });
    } else {
      res.json(labTrans); 
    }
  });
}

// Updates an existing LibraryTransactions in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return LibraryTransactions.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a LibraryTransactions from the DB
export function destroy(req, res) {
  return LibraryTransactions.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
