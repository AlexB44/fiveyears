import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true;

const Group = new Mongo.Collection('groups');

Group.schema = new SimpleSchema({
  name: {
    type: String,
    optional: false,
    label: 'Nom du groupe',
  },
  adventures: {
    type: [String],
    optional: false,
    label: 'Aventures',
  },
  createdAt: {
    type: Date,
    optional: false,
    label: 'Date de création',
  },
  revealedAt: {
    type: Date,
    optional: false,
    label: 'Date de révélation',
  },
});

export default Group;
