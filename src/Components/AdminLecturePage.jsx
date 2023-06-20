import React, { useContext, useEffect, useRef, useState } from 'react'
import "../css/AdminLecturePage.css"
import AddIcon from '@mui/icons-material/Add';
import AdminVideoCard from './AdminVideoCard';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import image from "../Images/clientImage.jpg"
import { AuthContext } from './AuthContext';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export default function AdminLecturePage() {
    const { token } = useContext(AuthContext);
    const [showVideoConfirmation, setShowVideoConfirmation] = useState(false);
    const [videodata, setvideodata] = useState([])

    const [videolink, setvideolink] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fetchagain, setfetchagain] = useState(false)
    const fileInputRef = useRef(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState("");
    const [uploading, setUploading] = useState(true);
    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(url);
                setUploading(false)
            });
        });
    };
    const closeUploadVideoScreen = () => {
        setShowVideoConfirmation(false)
    }
    const openUploadVideoScreen = () => {
        setShowVideoConfirmation(true)
    }
    const handleThumbnailChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type.includes('image/')) {
            setImageUpload(selectedFile);
            await uploadFile()
        } else {
            setImageUpload(null);
            alert("Invalid file type. Please select a  Image file.");
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleVideo = (e) => {
        setvideolink(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(imageUrls)
        if (imageUpload === null) {
            alert("No file selected.");
            return;
        }


        let payload = {
            title,
            thumbnail: imageUrls,
            description,
            videolink
        }
        fetch(`http://localhost:8000/api/admin/uploadcourse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token.token}`
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Video upload successfully");
                    setfetchagain(!fetchagain)
                } else {
                    console.error("Failed to upload video");
                }
            })
            .catch((error) => {
                console.error("An error occurred while deleting the video", error);
            });

        // Reset the form fields
        setThumbnail(null);
        setTitle('');
        setDescription('');
        setvideolink('')
        setImageUrls("")
        setShowVideoConfirmation(false)
    };



    async function videoList() {
        let res = await fetch('http://localhost:8000/api/user/getcourse').then((r) => r.json()).then((res) => (setvideodata(res.coursedetails)))
    };

    useEffect(() => {
        videoList()
    }, [fetchagain])
    return (
        <>
            <div className='admin-lecture-page'>
                <div className='admin-lecture-page-header'>
                    <div className="admin-lecture-page-header-left">
                        <h1>Add <span>Lecture</span> Video</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus quam atque sapiente exercitationem, iste tempore iure. Voluptate hic modi quasi quia, minus fuga officia dolores distinctio labore saepe perspiciatis. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero maiores suscipit explicabo temporibus? Quod recusandae animi autem hic cupiditate.</p>
                    </div>
                    <div className="admin-lecture-page-header-right" onClick={openUploadVideoScreen}>
                        <AddIcon className='admin-header-icon' />
                        <p>Upload</p>
                    </div>
                </div>
                <div className="admin-lecture-page-main">
                    <div className="admin-lecture-page-main-top">
                        <h3>Uploaded Videos</h3>
                    </div>
                    <div className="admin-lecture-page-main-bottom">
                        {
                            videodata?.map((item) => {
                                return <AdminVideoCard {...item} key={item._id} setfetchagain={setfetchagain} fetchagain={fetchagain} />
                            })
                        }


                    </div>
                </div>
            </div>
                <div className="change-image">
                    <img src={image} alt="" />
                    <div className="upload-daily">
                        <input type="file" className='upload-daily-image-btn'/>
                    </div>
                </div>
            {
                showVideoConfirmation && <div className="upload-video-screen" id="uploadVideoScreen" style={{ display: "flex" }}>
                    <form action="#" onSubmit={handleSubmit} className="upload-video-file">
                        <HighlightOffIcon className="close-icon" onClick={closeUploadVideoScreen} />
                        <div className="left-side">
                            <h4>Add Document</h4>
                            <div className='input-box'>
                                <p>Upload Thumbnail</p>
                                <input type="file" ref={fileInputRef} onChange={handleThumbnailChange} />
                            </div>
                            <div className="input-box">
                                <p>Insert Video Link</p>
                                <input type="text" className='input-field' onChange={handleVideo} />
                            </div>
                        </div>
                        <hr />
                        <div className="right-side">
                            <div className="input-box">
                                <h5>Title of Document</h5>
                                <input type="text" className="input-field" value={title}
                                    onChange={handleTitleChange} />
                            </div>
                            <div className="input-box">
                                <h5>Description of Document</h5>
                                <textarea rows="5" className="input-field" value={description}
                                    onChange={handleDescriptionChange}></textarea>
                            </div>
                            {uploading ? <div className="btn-a-solid"  > Loading</div> : <button type="submit" className="btn-a-solid" >
                                Save Changes
                            </button>}
                        </div>
                    </form>
                </div>
            }
        </>
    )
}
