import { Meteor } from 'meteor/meteor';
import Group from './groupModel';

const adminFields = {
  name: 1,
};

Group.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

if (Meteor.isServer) {
  Meteor.publish('group.private', function privateGroupPublish() {
    if (!this.userId || !Meteor.users.findOne({ _id: this.userId })) {
      return this.ready();
    }
    return Group.find({}, {
      fields: adminFields,
    });
  });
}
