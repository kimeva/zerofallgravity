import find from 'lodash/find';

// temp data source until db and api is set up
const memberData = require('./data/members/members.json');

export const memberService = {
  fetchMembers: () => memberData,
  fetchMember: (memberId) => find(memberData, ['id', memberId])
};

const gigData = require('./data/gigs/gigs.json');

export const gigService = {
  fetchGigs: () => gigData,
  fetchGig: (gigId) => find(gigData, ['id', gigId])
};
