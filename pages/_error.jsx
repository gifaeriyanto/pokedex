import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    let statusCode;
    if (res) {
      statusCode = res.statusCode;
    } else if (err) {
      statusCode = err.statusCode;
    }

    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <div>
        {
          statusCode === 404
            ? (
              <h1>
                <div>{ statusCode }</div>
                <span>Page not found!</span>
              </h1>
            )
            : (
              <h1>
                <div>{ statusCode }</div>
                <span>Something wrong!</span>
              </h1>
            )
        }
      </div>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

Error.defaultProps = {
  statusCode: null,
};

export default Error;
