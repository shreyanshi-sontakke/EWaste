import React from 'react'

function Page() {
  return (
    <>  
      <main id="page-wrap">
        <section className="midSection">
          <h3> Give your E-Waste a proper disposal and save the environment</h3>
          <h5>Find your nearest e-waste collectors</h5>
          <div className="input-group mb-3" >
            <input type="text" className="searchBar" placeholder="Search your city..." />
            <button className="btn btn-outline-secondary" type="button" id="Search"><i className='bx bx-search'></i></button>
          </div>
        </section>
      </main>
    </>

  );
}

export default Page;