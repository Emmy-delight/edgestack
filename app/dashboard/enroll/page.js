import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function Enroll () {
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
                              id="roomType"
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
                       </form>
                 </CardContent>
            </Card>
        </main>
    )
}