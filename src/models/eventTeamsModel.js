import mongoose from  "mongoose";

const studentSchema =new mongoose.Schema({
    teamName:{
        type:String,
        required:[true,"Team Name Required"]
    },
    member1:{
        type:String,
        required:[true,"Name Required"],
    },
    branch1:{
        type:String,
        required:[true,"Branch is required"]
    },
    usn1:{
        type:String,
        required:[true,"USN is required"]
    },
    email1:{
        type:String,
        required:[true,"Email Required"],
    },
    phone1:{
        type:String,
        required:[true,"Phone No Required"],
    },

    member2:{
        type:String,
        required:[true,"Name Required"],
    },
    usn2:{
        type:String,
        required:[true,"USN is required"]
    },
    branch2:{
        type:String,
        required:[true,"Branch is required"]
    },
    email2:{
        type:String,
        required:[true,"Email Required"],
    },
    phone2:{
        type:String,
        required:[true,"Phone No Required"],
    }
})


const Student=mongoose.models.Student || mongoose.model("Student",studentSchema);

export default Student;
