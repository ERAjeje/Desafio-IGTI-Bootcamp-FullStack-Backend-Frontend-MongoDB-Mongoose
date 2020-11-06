import mongoose from 'mongoose';
import Grade from './grade.schema.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grades = Grade;

export { db };

