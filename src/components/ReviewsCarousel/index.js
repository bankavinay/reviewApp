import {Component} from 'react'
import './index.css'

class ReviewsCaroursel extends Component {
  state = {
    activeReviewState: 0,
  }

  getReview = reviewsList => {
    const {activeReviewState} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewState
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewState} = this.state
    if (activeReviewState > 0) {
      this.setState(prevState => ({
        activeReviewState: prevState.activeReviewState - 1,
      }))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReviewState} = this.state
    if (activeReviewState < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewState: prevState.activeReviewState + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewState} = this.state
    console.log(activeReviewState)

    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          className="btn"
          onClick={this.onLeft}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow"
          className="btn"
          onClick={this.onRight}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCaroursel
