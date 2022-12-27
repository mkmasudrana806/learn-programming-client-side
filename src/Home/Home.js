import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../SharedContent/Cart';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h3>{categories.length} Programming Languages Tutorials</h3>
            {
                categories.map( category => <Cart key={category.language_id} category={category}></Cart>)
            }
        </div>
    );
};

export default Home;