import React, { Component } from 'react';
import { Page, Member } from 'components';
import { memberService } from 'services/zfg';
import Error from './_error';

export default class extends Component {
  static getInitialProps ({ res, query: { id } }) {
    return { member: memberService.fetchMember(id) };
  }

  render () {
    if (!this.props.member) {
      return <Error status={404}/>
    }

    return (
      <Page title={this.props.member.name.full}>
        <Member member={this.props.member}/>
      </Page>
    );
  }
}
