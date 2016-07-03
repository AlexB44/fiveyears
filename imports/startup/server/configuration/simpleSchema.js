/* eslint new-cap: false */

import { Match } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.extendOptions({
  unique: Match.Optional(Boolean),
  denyInsert: Match.Optional(Boolean),
  denyUpdate: Match.Optional(Boolean),
});

SimpleSchema.messages({
  required: 'Le champs [label] est obligatoire !',
});
