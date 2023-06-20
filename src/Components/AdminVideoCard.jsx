import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/AdminVideoCard.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AuthContext } from "./AuthContext";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export default function AdminVideoCard(props) {
  const { token } = useContext(AuthContext);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [editId, seteditId] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [uploading, setUploading] = useState(true);
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    console.log("IN")
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url)
        setUploading(false)
      });
    });
  };
  const openDeleteBox = (id) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteBox = () => {
    setShowDeleteConfirmation(false);
    // setDeleteId(null);
  };
  const closeVideoEditForm = () => {
    setShowEditConfirmation(false)
    // document.getElementById("editVideoScreen").style.display = "none";
  }

  const openVideoEditForm = (id) => {
    // document.getElementById("editVideoScreen").style.display = "flex";
    console.log("openVideoEditForm", id)
    seteditId(id)
    setShowEditConfirmation(true)
  }

  useEffect(() => {

  })



  const handleThumbnailChange = async (e) => {
    setImageUpload(e.target.files[0]);
    await uploadFile();
    console.log("OUT", imageUrls)
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  console.log("OUTSIDE", imageUrls)
  const handleDescriptionChange = async (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = async (e, id) => {
    e.preventDefault();

    console.log(imageUrls, uploading)
    let payload = {
      title,
      thumbnail: imageUrls,
      description
    }
    setTimeout(() => {
      fetch(`http://localhost:8000/api/admin/updatecourse?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${token.token}`
        },
        body: JSON.stringify(payload)
      })
        .then((response) => {
          if (response.ok) {
            console.log("Video Update successfully");
            props.setfetchagain(!props.fetchagain)
          } else {
            console.error("Failed to Update video");
          }
        })
        .catch((error) => {
          console.error("An error occurred while deleting the video", error);
        });
    }, 1000)

    setThumbnail(null);
    setTitle('');
    setDescription('');
    closeVideoEditForm();
    // setImageUpload("")

  };


  async function DeleteFunc(id) {
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc2ZDc1OGJiOTYxMjI5MTI1ZmY1NmEiLCJlbWFpbCI6InNhY2hpbkBnbWFpbC5jb20iLCJpYXQiOjE2ODU1MTExMTZ9.OBYUvv3pz5ULfhmeycPbhgvAZsaR6qPOL2WIehV_xtw"
    console.log(id, "deleteFunction", deleteId)
    fetch(`http://localhost:8000/api/admin/deletecourse?id=${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `bearer ${token.token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful delete
          console.log("Video deleted successfully");
          props.setfetchagain(!props.fetchagain)
        } else {
          // Handle delete error
          console.error("Failed to delete video");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the video", error);
      });

  }

  return (
    <div className="admin-video-card">
      <a href={props.video_url} target="_blank">
        <img src={props.thumbnail} alt={""} />
      </a>

      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
      <div className="admin-video-card-btns">
        <button className="edit-btn" onClick={() => openVideoEditForm(props._id)}>Edit</button>
        <button className="dlt-btn" onClick={() => openDeleteBox((props._id))}>
          Delete
        </button>
        {/* <a href={props.video_url} target="_black">Download</a> */}

      </div>


      {
        showDeleteConfirmation && (
          <div className="edit-screen" style={{ display: "flex" }}>
          <div className="delete-box" id="deleteBox" style={{ display: "flex" }} >
            <HighlightOffIcon className="close-icon" onClick={closeDeleteBox} />
            <h4>Do you Really Want To Delete This Video?</h4>
            <div className="delete-button-box">
              <button className="dlt-btn" onClick={() => DeleteFunc(deleteId)}>
                Yes
              </button>
              <button className="edit-btn" onClick={closeDeleteBox}>
                No
              </button>
            </div>
          </div>
          </div>

        )
      }
      {
        showEditConfirmation && (
          <div className="edit-screen" id="editVideoScreen" style={{ display: "flex" }}>
            <form onSubmit={(e) => handleSubmit(e, editId)} className="edit-video-form">
              <HighlightOffIcon className="close-icon" onClick={closeVideoEditForm} />
              <div className="edit-video-form-header">
                <h4>Edit Video Details</h4>
                <hr />
              </div>
              <div className="update-thumbnail">
                <p>New Thumbnail</p>
                <input type="file"
                  p={1.5}

                  ref={fileInputRef}
                  onChange={handleThumbnailChange} />
              </div>
              <div className="input-box">
                <p>New Title</p>
                <input
                  type="text"
                  className="input-field"
                  onChange={handleTitleChange}
                />
              </div>
              <div className="input-box">
                <p>New Description</p>
                <textarea
                  rows={2}
                  className="input-field"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              {uploading ? <div className="btn-a-solid"  > Loading</div> : <button type="submit" className="btn-a-solid" >
                Save Changes
              </button>}

            </form>

          </div>
        )
      }

    </div>
  );
}
