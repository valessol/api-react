import React, { Component } from 'react';

function App() {
  const data = [
    {id: 1, image: './logo192.png', title: 'Item 1'},
    {id: 2, image: './logo192.png', title: 'Item 2'},
    {id: 3, image: './logo192.png', title: 'Item 3'},
  ]
    
  const Card = (props) => (
      <ul>
          {
              props.items.map((item, i) => {
                  return <li key={i}>{item}</li>
              })
          }
      </ul>
)

  const ProductsCards = () =>{
    const {products, setProducts} = useState ();

  }



    render() {
        return(
            <div>
                {this.state.done && this.state.items.isArray() ? (
                    <List items={...this.state.items} />
                ) : (
                    <p>Cargando resultados...</p>
                )}
            </div>
        )
    }
}
export default Home
  );
}

export default App;
