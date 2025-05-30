import React from 'react'
import "./packageList.styles.scss"
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';

const PackageList = ({data}) => {
  return (
    <div id='package-list'>
    {data.map((item, index) => {
      return (
        <Link to={`/packages/all/${item._id}`} key={item._id} className='package-unit'>
          <div className="img-wrapper">
          {/*<img src={item.img[0]} alt=""/>*/}
          <Carousel data={item.img} />
          </div>
          <p className='name'> {item.name}</p>
        </Link>
      );
    })}
    </div>
  )
}

export default PackageList
