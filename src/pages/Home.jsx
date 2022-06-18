import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      url: `https://dummyjson.com/products`,
    })
      .then((res) => {
        console.log(res.data.products);
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className={styles.product}>
      {products.map((product) => (
        <div className={styles.card} key={product.id}>
          <h3>{product.title}</h3>
          <h5>{product.description}</h5>
          <div>
            <button>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
