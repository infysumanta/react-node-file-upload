import React, { useState } from "react";
import axios from "axios";
const FileUpload = () => {
  const [name, setName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", name);
    form.append("profileImg", profileImg);

    try {
      const { data } = axios.post("/api", form);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <div style={{ width: "400px", margin: "auto" }} className="mt-5">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setProfileImg(e.target.files[0])}
                />
              </div>
              <div className="form-group mt-2">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
