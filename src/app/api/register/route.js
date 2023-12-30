// import Student from "@/src/models/studentModel";

// import { connect } from "@/src/dbconfig/dbconfig";

// import { NextResponse } from "next/server";

// export async function POST(request){
//     try{
//         await connect();

//         const reqBody=await request.json();
//         const {name,usn,branch,email,phone,queries}=reqBody;

//         const newStud=Student({
//             name,
//             usn,
//             branch,
//             email,
//             phone,
//             queries
//         })


//         const savedUser=await newStud.save();

//         return NextResponse.json({
//             message:"Created User successfully",
//             success:true,
//             savedUser
//         })
//     }
//     catch(error){
//         return NextResponse.json({message:error.message},{status:500})
//     }
// }



import MusicTeams from "@/src/models/studentModel";
import { connect } from "@/src/dbconfig/dbconfig";

import { NextResponse } from "next/server";

export async function POST(request){
    try{
        await connect();

        const reqBody=await request.json();
        const {teamName,member1,branch1,usn1,email1,phone1,member2,branch2,usn2,email2,phone2}=reqBody;

        const newTeam=MusicTeams({
            teamName,member1,branch1,usn1,email1,phone1,member2,branch2,usn2,email2,phone2
        })


        const savedTeam=await newTeam.save();

        return NextResponse.json({
            message:"Created User successfully",
            success:true,
            savedTeam
        })
    }
    catch(error){
        return NextResponse.json({message:error.message},{status:500})
    }
}