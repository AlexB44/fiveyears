import { Meteor } from 'meteor/meteor';
import Group from './groupModel';

if (Meteor.isServer) {
  if (!Group.find().count()) {
    // create seeds
  }
}
