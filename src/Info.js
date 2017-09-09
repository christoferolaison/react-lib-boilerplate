// @flow

import React from 'react'

type Props = {
  heading: string,
  body: string,
};

type State = {
  inverted: boolean
};

class Info extends React.Component<Props, State> {
  state = { inverted: false };

  toggleInverted = () => this.setState(({ inverted }) => ({ inverted: !inverted }));

  props: Props;

  render() {
    const color = this.state.inverted
      ? '#ffffff'
      : '#222624'
    const backgroundColor = this.state.inverted
      ? '#222624'
      : '#ffffff'
    return (
      <div // eslint-disable-line
        onClick={this.toggleInverted}
        style={{
          backgroundColor,
          color,
          transition: [ 'all', '500ms' ].join(' '),
          margin: 0,
          padding: 20,
          width: '100vw',
          height: '100vh',
          cursor: 'pointer',
        }}
      >
        <h1
          style={{
            fontSize: 24,
            letterSpacing: 0.5,
            fontFamily: 'sans-serif',
            display: 'flex',
            alignItems: 'center',
            margin: '0 0 20px 0',
          }}
        >
          {this.props.heading}
        </h1>
        <p style={{ margin: '0 0 20px 0', letterSpacing: 0.3, fontFamily: 'sans-serif' }}>
          {this.props.body}
        </p>
        <span style={{ margin: 0, fontSize: 100 }} role='img' aria-label='avocado'>🥑</span>
      </div>
    )
  }
}

export default Info
