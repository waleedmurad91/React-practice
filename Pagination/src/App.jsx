// Crud operations add, delete ,get, update data by axios

import axios from "axios";
import { useEffect, useState } from "react";
import User from "./components/User";
import Form from "./components/Form";
import Pagination from "./components/Pagination";

function App() {
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState([]);
  const [addData, setAddData] = useState({ title: "", body: "" });
  //Pagenation
  const [usersPerpage, setUsersPerpage] = useState(6);
  const [currPage, setCurrPage] = useState(1);
  const lastindexof = currPage * usersPerpage;
  const firstindex = lastindexof - usersPerpage;
  const usersToshow = user.slice(firstindex, lastindexof);

  const getdata = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts" );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (res.status === 200) {
        const newUsers = user.filter((e) => {
          return e.id !== id;
        });
        setUser(newUsers);
      }
    } catch (err) {
      console.log("delete err", err);
    }
  };
  const handledelete = (id) => {
    deleteData(id);
  };

  function handleEdit(id) {
    const editdata = user.find((e) => e.id === id);
    setIsEditing(true);
    if (editdata) {
      setEditData(editdata);
    }

    setAddData((prevdata) => ({
      ...prevdata,
      title: editdata.title,
      body: editdata.body,
    }));
  }

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const post = async (payload) => {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts",payload);
      if (res.status === 201) {
        setUser([...user, res.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (payload) => {
    const id = editData.id;
    try {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,payload);
      setUser((prevData) =>
        prevData.map((elem) =>
          elem.id === res.data.id ? { ...elem, ...res.data } : elem
        )
      );
      setEditData({});
      setIsEditing(false);
    } catch (err) {
      console.log("update error", err);
    }
  };

  const handleSubmit = (e) => {
    console.log(e.id);
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "add") {
      post(addData);
    } else if (action === "update") {
      updateData(addData);
    }
    setAddData({ title: "", body: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-full bg-slate-950 text-white  flex-col gap-5">
      <Form
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        addData={addData}
        isEditing={isEditing}
      />
      <ol className="w-full flex flex-row flex-wrap gap-5 justify-center items-stretch my-5">
        <User
          user={usersToshow}
          handleEdit={handleEdit}
          handledelete={handledelete}
        />
      </ol>
      <Pagination total={user.length} perPage={usersPerpage} currPage={currPage} setCurrPage={setCurrPage} />
    </div>
  );
}

export default App;
