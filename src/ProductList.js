import React, { Component } from "react";
import ProductItem from "./productItim";

// const ProductList = props => {};

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: this.props.data
    };
  }

  componentDidMount() {
    this.setState({
      productos: this.state.productos.sort((a, b) => b.votes - a.votes)
    });
  }

  handleRender = event => {
    const productos = this.state.productos;
    const newProductos = productos
      .map(producto => {
        if (producto.id === event.productId) {
          producto.votes = event.votes;
        }
        return producto;
      })
      .sort((a, b) => b.votes - a.votes);
    this.setState({
      productos: newProductos
    });
  };

  render() {
    return (
      <div className="productList">
        <h1> Productos</h1>
        {this.state.productos.map(prod => (
          <ProductItem
            key={prod.id}
            {...prod}
            onVoteChange={this.handleRender}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
