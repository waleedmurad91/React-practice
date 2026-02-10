import React from "react";

function Form({handleInputChange,handleSubmit,addData,isEditing}) {
  return (
    <>
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
    </>
  );
}

export default Form;
