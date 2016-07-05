import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true;

const Adventure = new Mongo.Collection('adventures');

Adventure.objectiveSchema = new SimpleSchema({
  goal: {
    type: String,
    optional: false,
    label: 'objectif',
  },
  done: {
    type: Boolean,
    optional: true,
    defaultValue: false,
  },
});

Adventure.schema = new SimpleSchema({
  mail: {
    type: String,
    optional: true,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
  },
  createdAt: {
    type: String,
    optional: true,
    label: 'Date de création',
    defaultValue: new Date(),
    denyUpdate: true,
  },
  name: {
    type: String,
    optional: true,
    label: 'Nom',
  },
  groupId: {
    type: String,
    optional: false,
    label: 'Group ID',
    denyUpdate: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  objectives: {
    type: [Adventure.objectiveSchema],
    optional: false,
    label: 'Objectifs',
    minCount: 1,
  },
});

export default Adventure;
