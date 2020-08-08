import React from "react";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.votes
    };
  }

  voteHandler = event => {
    event.persist();
    let newVotes;
    if (event.target.id === "increase") {
      newVotes = this.state.votes + 1;
    } else if (event.target.id === "dicrease") {
      newVotes = this.state.votes - 1;
    }
    this.setState({ votes: newVotes });
    this.props.onVoteChange({
      votes: newVotes,
      productId: this.props.id
    });
  };

  render() {
    return (
      <div className="product-container">
        <img
          className="productImage"
          src={this.props.productImageUrl}
          alt="product_img"
        />
        <div className="dataContainer">
          <div className="buttonContainer">
            <button id="dicrease" onClick={this.voteHandler}>
              -
            </button>
            <p className="vote">{this.state.votes}</p>
            <button id="increase" onClick={this.voteHandler}>
              +
            </button>
          </div>
          <a href={this.props.url}>{this.props.title}</a>
          <p>{this.props.description}</p>
          <div className="seller">
            <h4>Vende: </h4>
            <img
              className="vendorImage"
              src={this.props.submitterAvatarUrl}
              alt="Submitter:img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
