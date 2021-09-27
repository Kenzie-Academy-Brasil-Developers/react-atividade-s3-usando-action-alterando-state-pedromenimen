import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("")
  const name = useSelector((state) => state.user);
  const handleClick = () => {
    dispatch(changeName(newName));
  }

  return (
    <div>
      <h1>User name: {name.name}</h1>
      <input type="text" onChange={evt => setNewName(evt.target.value)}/>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default UserCard;