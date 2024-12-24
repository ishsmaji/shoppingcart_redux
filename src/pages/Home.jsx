import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL="https://fakestoreapi.com/products";

    const[loading,setLoading]=useState(false);
    const[post,setPost]=useState([]);

    async function fetchData(){
      setLoading(true);
      try {
        const res=await fetch(API_URL);
        const data=await res.json();
        setPost(data);
      } catch (error) {
        console.log("Error Fetching Data");
        setPost([]);
      }
      setLoading(false);
    }

    useEffect(()=>{
      fetchData();
    },[])

  
    return (
      <div>
        {loading ? (
          <Spinner />
        ) : post.length > 0 ? (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            post.map((item) => (
              <Product key={item.id} post={item} />
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <p>No Product Found</p>
          </div>
        )}
      </div>
    );
  };

export default Home