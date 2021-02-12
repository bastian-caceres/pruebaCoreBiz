import React from "react";
import axios from "axios";

export default class ListaProductos extends React.Component {
  state = {
    productos: [],
  };

  async componentDidMount() {
    await axios
      .get(`https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products`)
      .then((res) => {
        console.log(res.data);
        const productos = res.data;
        this.setState({ productos });
      });
  }

  render() {
    return (
        <div className="inline-block">
           {this.state.productos.map((producto) => {
               return  <div className="card m-5 text-center" style={{width: "18rem"}}>
                   <img class="card-img-top" src={producto.img} alt="asd" />
                   <div className="card-body">
                       <h5 className="card-title">{producto.product}</h5>
                       <p className="card-text">Precio €{producto.price}</p>
                       <a href="/" className="btn btn-primary">Agregar al carro</a>
                   </div>
               </div>
           })}     
        </div>
    );
  }
}
