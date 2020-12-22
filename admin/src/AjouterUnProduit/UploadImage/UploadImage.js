import React, { Component } from "react";
import { storage } from "../../firebase";
import "./ImageDo.css";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      Namee: false,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      console.log("this is image",image);
      console.log("this is image name",image.name);
      console.log("this is props image name",this.props.Nom + ".jpg");
      if (
        image.name === this.props.Nom + ".jpg" || image.name === this.props.Nom +".png"
      ) {
        console.log('whyyy')
        this.setState({ image, Namee: false });
      } else {
        this.setState({ image: null });
      }
    }
  };

  handleUpload = () => {
    let image = this.state.image;
    console.log(image);
    if (image != null) {

      // Enregistrement de l'image dans Firebase Storage 
      // Ce service est serverless 

      const uploadTask = storage.ref(`images/${this.props.Produit}'/'${this.props.Marque}'/'${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        (error) => {
          // Error function ...
          console.log(error);
        },
        
      
       () => {
          // Affichage de l'image uploader par l'admin
          storage

            .ref(`images/${this.props.Produit}'/'${this.props.Marque}'/'${image.name}`)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url });
            });
        }
      );
      } else {
      this.setState({ Namee: true });
    }
  };
render() {
    return (
      <div className="center">
       

        <div className="file-field input-field">
           <div style ={{display :'flex',flexDirection : "column",alignItems:'center'}}>           
              <span className="SpanFile">Image </span>
            <div style ={{display : 'flex',alignItems:'center'}}>
            <input
              className="buttonn "
              type="file"
              onChange={this.handleChange}
            />
            </div>
            </div>
        <div className="row">
          <progress
            className="Progress"
            value={this.state.progress}
            max="100"
            className="progress"
          />
        </div>

        </div>
        <button className="button button1" onClick={this.handleUpload}>
          Upload
        </button>
        <br />
        <br />
        <img
          style={{ marginBottom : 40, marginLeft : 100 }}
          src={this.state.url || "https://via.placeholder.com/200x100"}
          alt="Uploaded Images"
          height="150"
          width="250"
        />
      
        <br />
        {this.state.Namee && (
          <text style={{ fontSize: 18, color: "red",marginBottom :10 }}>
            {" "}
            Le Nom De L'image doit etre le meme que le nom du produit
          </text>
        )}
      </div>
    );
  }
}

export default UploadImage;
