import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

console.log(styles);

const Home = () => (
  <div>
    <div className={styles.link}>Home Page</div>
    <Link to="/other">Sheeeeit</Link>
  </div>
);

export default Home;
