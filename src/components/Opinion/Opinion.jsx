import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.png';

class Opinion extends Component {
  render() {
    const {
      opinion: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount },
    } = this.props;
    return (
      <div>
        <div className="card">
          <div className="p-20">
            {/* <h4 class="card-title">Schools should have one meat-free day a week, says charity</h4> */}
            <div className="flex-start">
              <div>
                <img src={userImage} class="card-image" alt="user" />
              </div>
              <div className="ml-10">
                <div class="card-username"><Link to="/feeds">{userHandle}</Link></div>
                <div class="date-span mt--5">{createdAt}</div>
              </div>
            </div>
            <div class="card-body">
              <p>{body}</p>
            </div>
            <div class="space-between">
              <div class="reactions flex-start">
                <div class="reaction">
                  <span class="reaction-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6154 0H14.5673C12.6587 0 10.9712 1.05 10 2.6C9.02885 1.05 7.34135 0 5.43269 0H5.38462C2.40865 0.03 0 2.545 0 5.65C0 7.5 0.778846 10.125 2.29808 12.285C5.19231 16.4 10 20 10 20C10 20 14.8077 16.4 17.7019 12.285C19.2212 10.125 20 7.5 20 5.65C20 2.545 17.5913 0.03 14.6154 0ZM16.6154 11.46C14.5673 14.375 11.4471 17.065 10 18.24C8.55288 17.065 5.43269 14.37 3.38462 11.455C1.97596 9.455 1.34615 7.1 1.34615 5.65C1.34615 4.52 1.76923 3.46 2.52885 2.66C3.29327 1.86 4.30769 1.415 5.39423 1.405H5.4375C6.125 1.405 6.80769 1.59 7.41346 1.945C8 2.29 8.50962 2.78 8.875 3.37C9.125 3.765 9.54808 4.005 10.0048 4.005C10.4615 4.005 10.8846 3.765 11.1346 3.37C11.5048 2.78 12.0096 2.29 12.5962 1.945C13.2019 1.59 13.8846 1.405 14.5721 1.405H14.6154C15.6971 1.415 16.7163 1.86 17.4808 2.66C18.2452 3.46 18.6635 4.525 18.6635 5.65C18.6538 7.1 18.024 9.455 16.6154 11.46Z" fill="black" />
                    </svg>
                  </span>
                  <span class="reaction-type">Like</span>
                  <span class="reaction-count">{likeCount}</span>
                </div>
                <div class="reaction ml-20">
                  <span class="reaction-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </span>
                  <span class="reaction-type">Discussions</span>
                  <span class="reaction-count">{commentCount}</span>
                </div>
              </div>
              <div class="dropdown">
                <div class="dropdown-ellipsis">&#8943;</div>
                <div class="dropdown-content">
                  <a class="#"> Edit &#128221;</a>
                  <a class=""> Delete &#128221;</a>
                  <a class=""> Bookmark &#128221;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
Opinion.propTypes = {
  opinion: PropTypes.object.isRequired,
}
export default Opinion;
