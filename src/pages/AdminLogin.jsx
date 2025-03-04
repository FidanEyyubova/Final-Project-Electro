import Aos from 'aos';
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

const AdminLogin = () => {
     useEffect(() => {
     Aos.init({ duration: 1000 });
     window.scroll(0,80)
      },[])

      
    return (
        <div className='login admin-log'>
          <div className="container-fluid">
          <div className="row back-img">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <h1>
                  <i>ADMIN LOGIN</i>
                </h1>
              </div>
            </div>
            <div className="row g-0 py-4" data-aos="fade-right" >
                <div className="col-12 log-col d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column justify-content-center align-items-center gap-3 py-4 pb-4'>
                        <div className="header">
                            <h2 className='pt-3'>Admin account</h2>
                        </div>
                        <div>   
                            <form action="" className='d-flex flex-column gap-4 mt-3 mb-3'>
                                <div className='d-flex flex-column in gap-2'>
                                <label htmlFor="" >Email address</label>
                                <input type="email" placeholder='Your email address' />
    
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Your password' />
                                </div>
                            </form>
                        </div>
                        <div>
                            <button type='button' className='mb-3 admin'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
}

export default AdminLogin
