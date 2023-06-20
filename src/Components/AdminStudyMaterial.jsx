import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/AdminStudyMaterial.css";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AdminStudyMaterialCard from "./AdminStudyMaterialCard";
import { AuthContext } from "./AuthContext";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
export default function AdminStudyMaterial() {
  const { token } = useContext(AuthContext);
  const [showVideoConfirmation, setShowVideoConfirmation] = useState(false);
  const closeUploadFileScree = () => {
    setShowVideoConfirmation(false)
  }
  const openUploadFileScree = () => {
    setShowVideoConfirmation(true)
  }
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fetchagain, setfetchagain] = useState(false)
  const [studydata, setstudydata] = useState([])
  const fileInputRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(true);
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
  async function studyList() {
    let res = await fetch('http://localhost:8000/api/user/getMaterial').then((r) => r.json()).then((res) => (setstudydata(res.studymaterials)))
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFile = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setImageUpload(selectedFile);
      await uploadFile()
    } else {
      setImageUpload(null);
      alert("Invalid file type. Please select a PDF file.");
    }

    // setfilelink(e.target.files[0]);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageUpload === null) {
      alert("No file selected.");
      return;
    }

    console.log(imageUrls)
    let payload = {
      title,
      description,
      pdf_link: imageUrls
    };
    fetch(`http://localhost:8000/api/admin/uploadmaterial`, {
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
    setTitle('');
    setDescription('');
    closeUploadFileScree()
    setImageUrls("")
  };
  useEffect(() => {
    studyList()
  }, [fetchagain])
  return (
    <>
      <div className="admin-study-material">
        <div className="admin-study-material-header">
          <div className="admin-study-material-header-left">
            <h1>
              Add <span>Study</span> Material
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              accusamus quam atque sapiente exercitationem, iste tempore iure.
              Voluptate hic modi quasi quia, minus fuga officia dolores
              distinctio labore saepe perspiciatis.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero
              maiores suscipit explicabo temporibus? Quod recusandae animi autem
              hic cupiditate.
            </p>
          </div>
          <div className="admin-study-material-header-right" onClick={openUploadFileScree}>
            <AddIcon className="admin-header-icon" />
            <p>Upload</p>
          </div>
        </div>
        <div className="admin-study-material-main">
          <div className="admin-study-material-main-top">
            <h3>Study Material</h3>
          </div>
          <div className="admin-study-material-main-bottom">
            {
              studydata?.map((item) => {
                return <AdminStudyMaterialCard {...item} key={item._id} setfetchagain={setfetchagain} fetchagain={fetchagain} />
              })
            }

          </div>
        </div>
      </div>
      {
        showVideoConfirmation && (<div className="upload-file-screen" id="uploadFileScreen" style={{
          display
            : "flex"
        }}>
          <form action="#" onSubmit={handleSubmit} className="upload-pdf-file">
            <HighlightOffIcon className="close-icon" onClick={closeUploadFileScree} />
            <div className="left-side">
              <h4>Add Document</h4>
              <input type="file" onChange={handleFile} />
            </div>
            <hr />
            <div className="right-side">
              <div className="input-box">
                <h5>Title of Document</h5>
                <input type="text" className="input-field" onChange={handleTitleChange} />
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
        </div>)
      }
    </>
  );
}
