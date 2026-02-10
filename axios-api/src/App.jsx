// Crud operations add, delete ,get, update data by axios 

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState([]);
  const [addData, setAddData] = useState({ title: "", body: "" });


  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
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
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
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
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload
      );
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
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        payload
      );
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
      <form
        className="mt-10 flex flex-row gap-2"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="bg-slate-500 text-white px-3 py-1 rounded focus:outline-none"
          placeholder="Title"
          type="text"
          name="title"
          value={addData.title}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          className="bg-slate-500 text-white px-3 py-1 rounded focus:outline-none"
          placeholder="Body"
          type="text"
          name="body"
          value={addData.body}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button
            type="submit"
            value={isEditing ? "update" : "add"}
            className="px-3 py-2 bg-green-400 rounded-lg cursor-pointer"
          >
            {isEditing ? "Update" : "Add"}
          </button> 
      </form>
      <ol className="w-full flex flex-row flex-wrap gap-5 justify-center items-stretch my-5">
        {user.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-slate-800 p-4 rounded-xl flex flex-col gap-2 text-xl w-1/4 justify-between"
            >
              <div className="font-bold tracking-wide font-serif">
                Title:
                <span className="font-light text-base text-slate-400">
                  {item.title}
                </span>
              </div>
              <div className="font-bold tracking-wide font-serif">
                Body:
                <span className="font-light text-base text-slate-400">
                  {item.body}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  className="bg-green-700 text-black px-5 py-1 rounded cursor-pointer"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-700 font-semibold px-5 py-1 rounded cursor-pointer"
                  onClick={() => {
                    handledelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
