import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../ui/layout/indexPage/indexPage.js';
import '../../../ui/layout/goPage/goPage.js';
import '../../../ui/layout/adventurePage/adventurePage.js';

FlowRouter.route('/', {
  name: 'indexPage',
  action() {
    BlazeLayout.render('indexPage');
  },
});

FlowRouter.route('/go', {
  name: 'goPage',
  action() {
    BlazeLayout.render('goPage');
  },
});

FlowRouter.route('/adventure', {
  name: 'adventurePage',
  action() {
    BlazeLayout.render('adventurePage');
  },
});
