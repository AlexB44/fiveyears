import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Adventure from './adventureModel';

Meteor.methods({
  'adventure.insert'(groupId, objectives) {
    check(groupId, String);
    check(objectives, Array);
    try {
      check({ groupId, objectives }, Adventure.schema);
      return Adventure.insert({ groupId, objectives });
    } catch (e) {
      throw new Meteor.Error(e.message);
    }
  },
});
