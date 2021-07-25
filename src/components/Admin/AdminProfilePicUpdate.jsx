import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAdmin, updateImage } from "../../store/selectAdminReducer";

function UpdateAdminProfilePic() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin());
  }, []);

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const selectImage = (e) => {
    setFile(e.target.files[0]);
    generatePreview(e.target.files[0]);
  };

  const generatePreview = (file) => {
    const result = URL.createObjectURL(file);
    setImage(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateImage(file));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="AdminProfilePicUpdate"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="staticBackdropLabel"
                  style={{ color: "black" }}
                >
                  Update Profile Picture 📸
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-dialog modal-dialog-scrollable"></div>
              <input
                className="admins-BTmodal"
                type="file"
                id="file"
                onChange={selectImage}
                accept="image/*"
                style={{ color: "black" }}
              />
              {image && <img src={image} alt="preview" />}
              <div className="modal-footer">
                <button
                  type="button"
                  className="homeButton btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="homeButton btn btn-primary btn-sm"
                  img
                  onClick={(e) => setImage(null)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateAdminProfilePic;
