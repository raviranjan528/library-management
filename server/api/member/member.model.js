'use strict';

import mongoose from 'mongoose';

var MemberSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  username: String,
  email: String,  
  contactNo: String,
  createdAt: {
		type: Date,
		default: Date.now
	},

	updatedAt: { 
		type: Date 
	}
});

export default mongoose.model('Member', MemberSchema);
