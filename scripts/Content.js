import React from 'react';
import Form from './Form';
import VideosList from './VideosList';

export default class Content extends React.Component {
  render() {
    return (
      <section>
        <Form />
        <VideosList />
      </section>
    );
  }
}