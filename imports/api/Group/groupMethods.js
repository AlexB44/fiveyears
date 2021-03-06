import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Group from './groupModel';

Meteor.methods({
  'group.insert'(groupName) {
    check(groupName, String);
    const now = new Date();
    const groupToCreate = {
      name: groupName,
      createdAt: now,
      revealedAt: new Date(now.setFullYear(now.getFullYear() + 5)),
    };
    try {
      check(groupToCreate, Group.schema);
      return Group.insert(groupToCreate);
    } catch (e) {
      throw new Meteor.Error(e.message);
    }
  },

  'group.getName'(_id) {
    check(_id, String);
    const group = Group.findOne({ _id });
    if (!group) {
      throw new Meteor.Error('Ce group n\'existe pas');
    } else {
      return group.name;
    }
  },

  'group.addAdventurer'(groupId, adventurer) {
    check(adventurer, Object);
    check(groupId, String);
    try {
      check(adventurer, Group.AdventurerSchema);
      return Group.update({ _id: groupId }, { $push: { adventurers: adventurer } });
    } catch (e) {
      throw new Meteor.Error(e.message);
    }
  },
});
