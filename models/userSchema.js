import mongoose from "mongoose";

// schema of User  = SOU
const SOU = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: /^\S+@\S+\.\S+$/,  
    maxLength: 50,
    required: true,
  },
  phoneNumber: {
    type: String,
    validate: /^\+92 3\d{2}-\d{7}$/,
    required: true,
  },
  address: {
    type: String,
    validate: /^House No.\S+$/,
  },
  project: [[{ type: mongoose.Schema.Types.ObjectId, ref: "ProjectModel" }]],
  about: [{ type: mongoose.Schema.Types.ObjectId, ref: "AboutModel" }],
  contact: [{ type: mongoose.Schema.Types.ObjectId, ref: "ContactModel" }],
  social: [{ type: mongoose.Schema.Types.ObjectId, ref: "SocialModel" }],
});

const UserModel = mongoose.model("User", SOU);

export default UserModel;
