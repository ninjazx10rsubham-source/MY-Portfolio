import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Profile() {
  const [data, setData] = useState({});

  useEffect(() => { load(); }, []);

  const load = async () => {
    const snap = await getDoc(doc(db, "portfolio", "profile"));
    if (snap.exists()) setData(snap.data());
  };

  const save = async () => {
    await setDoc(doc(db, "portfolio", "profile"), data);
    alert("Saved!");
  };

  return (
    <div className="card">
      <h2>Profile</h2>
      <input placeholder="Name" value={data.name || ""} onChange={e => setData({...data, name:e.target.value})}/>
      <input placeholder="DOB" value={data.dob || ""} onChange={e => setData({...data, dob:e.target.value})}/>
      <input placeholder="Photo URL" value={data.photo || ""} onChange={e => setData({...data, photo:e.target.value})}/>
      <button onClick={save}>Save</button>
    </div>
  );
}
