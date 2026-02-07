 "use client"
import { Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    phone: yup.string().matches(/^[0-9]{11}$/, "Phone number must be 11 digits").required("Phone number is required"),
    examType: yup.string().oneOf(["Jamb", "Waec", "Neco"]).required("Exam type is required"),
    examDate: yup.date().required("Exam date is required"),
    subject: yup.array().min(1, "Atleast one subject must be selected").required(),
 })
 
export default function Enroll () {
     const [subject,setSubject] = useState([]);
     const {handleChange, handleSubmit, handleBlur,touched,errors,setFieldValue } = useFormik({
        initialValues: {
            fullName: "",
            phone: "",
            examType: "",
            examDate: "",
            subject: [],
        }
     })

    return (
        <main className="min-h-screen flex justify-center py-6 px-4">
            <Card sx={{width: 380}}>
                 <CardHeader sx={{textAlign: "center"}} title="Enroll Student" subheader="Registeration form"/>
                 <CardContent>
                       <form className="py-2 flex flex-col gap-3 px-2">
                          <div>
                              <TextField 
                               fullWidth
                               type="text"
                               label="FullName"
                               id="fullName"
                               placeholder="Enter Full Name"
                               size="small"
                              />
                          </div>
                          <div>
                             <TextField
                              fullWidth
                              type="tel"
                              label="Phone Number"
                              id="phone"
                              placeholder="08077....."
                              size="small"
                             />
                          </div>
                          <FormControl>
                             <InputLabel id="examType-label">Exam Type</InputLabel>
                             <Select
                              labelId="examType-label"
                              name="examType"
                              size="small"
                              label="Exam Type"
                              id="examType"
                             >
                                 <MenuItem>Jamb</MenuItem>
                                 <MenuItem>Waec</MenuItem>
                                 <MenuItem>Neco</MenuItem>
                             </Select>
                          </FormControl>
                          <div>
                            <TextField
                             fullWidth
                             type="date"
                             label="Exam Date"
                             id="examDate"
                             placeholder="Enter exam date"
                             size="small"
                             InputLabelProps={{shrink: true}}
                            />
                          </div>
                          <p className="mt-2 text-gray-600 text-center">Select Subjects</p>
                          <FormGroup> 
                            {["English","Mathematics","Biology","Chemistry", "Physics"].map(subject =>
                             <FormControlLabel key={subject} control={<Checkbox/>}  label={subject} />
                             )}
                          </FormGroup>
                          <button type="submit" className="w-full h-9 cursor-pointer rounded bg-blue-500 font-semibold text-white">Enroll</button>
                       </form>
                 </CardContent>
            </Card>
        </main>
    )
}