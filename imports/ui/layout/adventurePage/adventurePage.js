import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import './adventurePage.html';

Template.adventurePage.onRendered(() => {
  Meteor.call('group.getName', FlowRouter.current().params.id, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      $('.js-groupName').text(res);
    }
  });
});
