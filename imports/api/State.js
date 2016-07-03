import { Mongo } from 'meteor/mongo';

const State = new Mongo.Collection(null);

const initialState = {};

State.insert(initialState);

export default State;
