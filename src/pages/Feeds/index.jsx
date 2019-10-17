import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getOpinions } from '../../store/actions/dataActions';

// components
import Opinion from '../../components/Opinion/Opinion';

class Feeds extends Component {
  componentDidMount() {
    this.props.getOpinions()
  }
  render() {
    const { opinions, loading } = this.props.data;
    let opinionMarkup = !loading ? (
      opinions.map(opinion => <Opinion key={opinion.screamId} opinion={opinion} />)
    ) : <p>Loading.....</p>
    return (
      <div className="container">
        <div className="columns">
          <div className="col-2"></div>
          <div class="col-8">
            {opinionMarkup}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    )
  }
}
Feeds.propTypes = {
  getOpinions: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, { getOpinions })(Feeds);


