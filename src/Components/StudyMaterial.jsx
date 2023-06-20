import React, { useEffect, useState } from 'react'
import "../css/StudyMaterial.css"
import StudyMaterialCard from './StudyMaterialCard'
export default function StudyMaterial() {

  return (
    <div className='study-material-section'>
      <div className="study-material-section-top">
        <h3><span>Study</span> Material</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!</p>
      </div>
      <div className="study-material-section-middle">
        {/* {
          studydata?.map((item) => {
            return <StudyMaterialCard {...item} key={item._id} />
          })
        } */}
        <StudyMaterialCard title="Title 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!" />
        <StudyMaterialCard title="Title 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!" />
        <StudyMaterialCard title="Title 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!" />
      </div>
      <div className="study-material-section-bottom">
        <a href="#" className="btn-a-solid">All Study Material</a>
      </div>
    </div>
  )
}
