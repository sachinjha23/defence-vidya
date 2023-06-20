import React, { useContext, useRef, useState } from 'react'
import "../css/AdminStudyMaterialCard.css"
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { AuthContext } from './AuthContext';
export default function AdminStudyMaterialCard(props) {
  const { token } = useContext(AuthContext);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [editId, seteditId] = useState(null);

  const closeDeleteBox = () => {
    setShowDeleteConfirmation(false);
    setDeleteId(null);
  }
  const openDeleteBox = (id) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  }
  const closepdfEditForm = () => {
    setShowEditConfirmation(false)
  }
  const openpdfEditForm = (id) => {
    console.log("openVideoEditForm", id)
    seteditId(id)
    setShowEditConfirmation(true)
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e, id) => {
    e.preventDefault();
    var formdata = {
      title,
      description
    }
    fetch(`http://localhost:8000/api/admin/updatematerial?id=${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token.token}`
      },
      body: JSON.stringify(formdata)
    })
      .then((response) => {
        if (response.ok) {
          console.log("pdf Update successfully");
          props.setfetchagain(!props.fetchagain)
        } else {
          console.error("Failed to Update pdf");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the pdf", error);
      });
    setTitle('');
    setDescription('');
    closepdfEditForm()

  };

  async function DeleteFunc(id) {
    console.log(id, "deleteFunction", deleteId)
    fetch(`http://localhost:8000/api/admin/deletematerial?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token.token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log("pdf deleted successfully");
          props.setfetchagain(!props.fetchagain)
        } else {
          console.error("Failed to delete pdf");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the pdf", error);
      });

  }
  return (
    <div className='admin-study-material-card'>
      <div className="admin-study-material-card-circle">
        <NoteAddIcon className='note-add-icon' />
      </div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <div className="admin-study-material-card-button-section">
        <button className="edit-btn" onClick={() => openpdfEditForm(props._id)}>Edit</button>
        <button className="dlt-btn" onClick={() => openDeleteBox(props._id)}>Delete</button>
        {/* <a href={props.pdf_link}>Download</a> */}
      </div>
      {showDeleteConfirmation && (<div className="delete-screen" style={{ display: "flex" }} id='deleteScreen'>
        <div className="delete-box" id='deleteBox'>
          <HighlightOffIcon className='close-icon' onClick={closeDeleteBox} />
          <h4>Do you Really Want To Delete This File ?</h4>
          <div className="delete-button-box">
            <button className="dlt-btn" onClick={() => DeleteFunc(deleteId)}>Yes</button>
            <button className="edit-btn" onClick={closeDeleteBox}>No</button>
          </div>
        </div>
      </div>)
      }

      {showEditConfirmation && (<div className="edit-pdf-screen" id="editpdfScreen" style={{ display: "flex" }}>
        <form onSubmit={(e) => handleSubmit(e, editId)} className="edit-pdf-form">
          <HighlightOffIcon className="close-icon" onClick={closepdfEditForm} />
          <div className="edit-pdf-form-header">
            <h4>Edit Pdf Details</h4>
            <hr />
          </div>
          <div className="input-box">
            <p>New Title</p>
            <input type="text" className="input-field"
              value={title}
              onChange={handleTitleChange} />
          </div>
          <div className="input-box">
            <p>New Description</p>
            <textarea rows={2}
              value={description}
              onChange={handleDescriptionChange}
              className="input-field" />
          </div>
          <button type="submit" className="btn-a-solid">Save Changes</button>
        </form>
      </div>)
      }

    </div>
  )
}
