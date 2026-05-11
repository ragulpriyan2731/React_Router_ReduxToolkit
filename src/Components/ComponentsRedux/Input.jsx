import { useState } from "react"

const Input=()=>{
const [input, setinput] = useState({
    name:"",
    age:""
})
const handlechange=(event)=>{
    const {name,value}=event.target;

setinput((cur)=>{
    return{...cur,
[name]:value,}
    }
)
}

return(
        <div>
            <form>
                <label>name</label>
                <input placeholder="enter your name" name="name"  type="text" value={input.name} onChange={handlechange}/>
                <label>age</label>
                <input name="age" placeholder="enter your age" type="number" value={input.age} onChange={handlechange}/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}
export default Input