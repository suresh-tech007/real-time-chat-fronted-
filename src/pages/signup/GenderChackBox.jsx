
const GenderChackBox = ({selectGender,onchackbox}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
                <span className="label-text ">Male</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked={selectGender === "male"}
                onChange={()=>onchackbox("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selected" : ""}`}>
                <span className="label-text ">Female</span>
                <input type="checkbox" className="checkbox border-slate-900"
                  checked={selectGender === "female"}
                  onChange={()=>onchackbox("female")} />
            </label>
        </div>
    </div>
  )
}

export default GenderChackBox;



{/* <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Gender</span>
                        </label>
                       <div className="">
                       <input className="p-2 mx-2" type="radio" value="Male" name="gender" /> Male
                        <input className="p-2 mx-2" type="radio" value="Female" name="gender" /> Female
                       </div>
                         
                    </div> */}