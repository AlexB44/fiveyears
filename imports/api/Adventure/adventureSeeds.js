import { Meteor } from 'meteor/meteor';
import Adventure from './adventureModel';

if (Meteor.isServer) {
  if (!Adventure.find().count()) {
    // create seeds
  }
}
