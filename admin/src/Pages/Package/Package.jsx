import React from 'react'
import "./package.styles.scss"
import { useEffect , useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, deletePackage } from '../../features/counter/package/packageSlice';

const Package = () => {
    const { user } = useSelector((state) => state.auth);
    const isSuccess = useSelector((state) => state.Package?.isSuccess);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pkg, setPackage] = useState(null);

    useEffect(() => {
        if (isSuccess) {
          // navigate to packages
          navigate("/packages");
          // disptach reset
          dispatch(reset());
        }
      }, [dispatch, isSuccess, navigate]);

    useEffect(() => {
      const getPackage = async () => {
            dispatch(reset())
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
        
    }, [dispatch, id]);

    const handleDelete = () =>{
        dispatch(deletePackage(id));
    }

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
            <h2> Rs : {pkg.price.toFixed(2)} </h2>
            <div className="cta-wrapper">
            <Link to={`/edit/packages/${pkg._id}`}>Edit Package</Link>
            {user?.isAdmin ? <button onClick={handleDelete}>Delete Package</button> : "dont show"}
            </div>
        </div> 
        </div>
        ) : null}
        </div>
    </div>
  )
}

export default Package;
