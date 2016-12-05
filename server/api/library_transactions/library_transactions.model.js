'use strict';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';

var LibraryTransactionsSchema = new mongoose.Schema({
	status: String,

	member: {
		type: Schema.ObjectId,
		ref: 'Member'
	},

	book: {
		type: Schema.ObjectId,
		ref: 'Book'
	},

	lastDate:{
		type: Date
	},

	createdAt: {
		type: Date,
		default: Date.now
	},

	updatedAt: { 
		type: Date 
	}
});

export default mongoose.model('LibraryTransactions', LibraryTransactionsSchema);
