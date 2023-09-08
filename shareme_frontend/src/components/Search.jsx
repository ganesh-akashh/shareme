import React from 'react'
import { useState, useEffect } from 'react'
import MasonaryLayout from './MasonaryLayout';
import { feedQuery, searchQuery } from '../utilities/data';
import { client } from '../client';
import Spinner from './Spinner';

const Search = ({ searchTerm, setSearchTerm }) => {


  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState('');

  useEffect(() => {
      if(searchTerm){
        setLoading(true);
        const query=searchQuery(searchTerm);
        client.fetch(query).then((data)=>{
          setPins(data);
          setLoading(false);
        })
      }
      else{
         setLoading(true);
         const query=feedQuery(searchTerm);
         client.fetch(query).then((data)=>{
          setPins(data);
          setLoading(false);
         })
      }

  }, [searchTerm])



  return (
    <div>
       {loading ? <Spinner message="Searching for pins" />:null}
       {pins?.length!=0 ? <MasonaryLayout  pins={pins}/> : null}
        {(pins?.length === 0 && searchTerm !== '' && !loading) ? (
        <div className='mt-10 text-center text-xl font-bold text-red-600'>
          No Pins Found!
        </div>
      ) : null}

    </div>
  )
}

export default Search