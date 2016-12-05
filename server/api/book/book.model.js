'use strict';

import mongoose from 'mongoose';

var BookSchema = new mongoose.Schema({
  bookname: String,
  bookAuthor: String,
  bookAvailability: String,
  createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: { 
		type: Date 
	}

});

export default mongoose.model('Book', BookSchema);
