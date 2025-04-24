import React from 'react'
import "./package.styles.scss"
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

const Package = () => {

    const {id} = useParams();

    const [pkg, setPackage] = useState(null);

    useEffect(() => {

        const getPackage = async () => {
            try {
                const res = await fetch(`/api/packages/${id}`);

                if (res.ok) {
                    const data = await res.json();

                    setPackage(data)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getPackage()
        
    }, [id])

  return (
    <div id='package'>
        <div className="container">
        {pkg ? ( 
        <div> 
            
            <div className="img-wrapper">
                <img src={pkg.img[0]} alt="" />
            </div>
            <div className="text-wrapper">
            <h1 className="heading center">{pkg.name}</h1>
            <p> {pkg.desc} </p>
            <p> Rs : {pkg.price.toFixed(2)} </p>
            </div>
        </div> 
        ) : null}
        </div>
    </div>
  )
}

export default Package
