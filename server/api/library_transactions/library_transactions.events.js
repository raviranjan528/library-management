/**
 * LibraryTransactions model events
 */

'use strict';

import {EventEmitter} from 'events';
import LibraryTransactions from './library_transactions.model';
var LibraryTransactionsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LibraryTransactionsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  LibraryTransactions.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LibraryTransactionsEvents.emit(event + ':' + doc._id, doc);
    LibraryTransactionsEvents.emit(event, doc);
  }
}

export default LibraryTransactionsEvents;
