import React from 'react'
import Typed from 'react-typed';

function Page() {
  return (
     <>  
      <main id="page-wrap">
        <section className="midSection">
          <h3> Give your E-Waste a proper disposal and save the environment</h3>
          <h5>Find your nearest e-waste collectors</h5>
          <div className="input-group mb-3" >
          <Typed className="animationBar" strings={[
                    'Mumbai',
                    'Aurangabad',
                    'Pune',
                    'Nagpur']}
                    typeSpeed={150}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                   <input type="text" className="searchBar"  />
                </Typed>            
            <button className="btn btn-outline-none-secondary" type="button" id="Search"><i className='bx bx-search'></i></button>
          </div>
        </section>
      </main>
    </>

  );
}

export default Page;