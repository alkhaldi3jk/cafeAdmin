import React from 'react'
import "./FilterTab.css";

function FilterTab() {
  return (

    <div className="mainContainer">
      <div className="left">

      <div className="cards">
            <div className="filters">
                <div className="pending">
                    <h2>Orders</h2>
                    <a href="a" className="button2">
                        Pending
                    </a>
                    <div className="pending">
                <a href="a" className="button2">
                        Completed
                    </a>
                </div>
                
                </div>

                <div className="filter_buttons">
                    <a href="a" className="button2">All</a>
                </div>
            </div>

        </div>
        </div>



      </div>
  )
}

export default FilterTab