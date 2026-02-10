import React from 'react';

function User({user,handleEdit,handledelete}) {
  return (
    <>
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
    </>
  );
}

export default User;
