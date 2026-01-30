import { TextField } from "@mui/material";

export default function Login () {
    return (
        <main className="min-h-screen flex justify-center py-6 px-2">
            <div className="w-full shadow-md rounded md:w-94 md:flex md:flex-col md:gap-3 md:max-h-120 md:px-3 md:py-4">
                <h1 className="text-2xl font-bold text-center">Sign Into Exam Portal</h1>
                <p className="text-sm text-gray-500 mt-2 text-center">Create an account or sign In</p>
                <form className=" flex flex-col gap-3">
                    <div>
                      <TextField 
                       fullWidth
                       size="small"
                       label="Email"
                       type="email"
                       placeholder="emmanuel@gmail.com"
                       id="email"
                      />
                    </div>
                    <button className="text-white w-full h-10 font-semibold flex justify-center items-center bg-blue-500 p-3 rounded-md cursor-pointer ">Continue</button>
                </form>

            </div>

        </main>
    )
}