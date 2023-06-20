import React, { useContext, useEffect, useState } from 'react'
import "../css/StudyMaterialPage.css";
import StudyMaterialCard from './StudyMaterialCard';
import Acheivements from './Acheivements';
import CourseSection from './CourseSection';
import { AuthContext } from './AuthContext';

export default function StudyMaterialPage() {
    const { token } = useContext(AuthContext);

    const [studydata, setstudydata] = useState([])
    async function studyList() {

        let res = await fetch('http://localhost:8000/api/user/getMaterial').then((r) => r.json()).then((res) => (setstudydata(res.studymaterials)))
    }

    useEffect(() => {
        studyList()
    }, [])
    return (
        <>
            <div className="study-material-page-header">
                <p>Get The Best Education From</p>
                <h1>Defence <span>Vidya</span></h1>
                <p>We have the experts to take you toward the journey of your success!</p>
            </div>
            <div className="study-material-section">
                <div className="study-material-section-top">
                    <h3><span>Study </span> Material</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos unde reiciendis. Eum, porro facere.</p>
                </div>
                <div className="study-material-section-bottom">
                    {
                        studydata?.map((item) => {
                            return <StudyMaterialCard {...item} key={item._id} />
                        })
                    }

                </div>
            </div>
            <div className="study-material-army-bg"></div>
            <Acheivements />
            <CourseSection />
        </>
    )
}
