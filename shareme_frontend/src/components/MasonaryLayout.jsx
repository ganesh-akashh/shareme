import React from 'react'
import Pin from './Pin'
import Masonry from 'react-masonry-css'

const breakpointObj={
  default:4,
  3000:6,
  2000:5,
  1200:3,
  1000:2,
  500:1
}
const MasonaryLayout = ({pins}) => {
  return ( 
    <Masonry className='flex animate-slide-fwd my-masonry-grid' breakpointCols={breakpointObj} >
       {pins?.map((pin)=> <Pin  key={pin._id} pin={pin}/>)}
    </Masonry>
  )
}

export default MasonaryLayout