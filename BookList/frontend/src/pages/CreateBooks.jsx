import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      description,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Book is not Created. Please try again.", {
          variant: "error",
        });
        console.log(error);
      });
  };

  return (
    <div
      className="p-4 flex flex-col"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <div
        className="flex"
        style={{
          width: "79%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <BackButton />
        <h1 className="text-3xl my-4">Create Book</h1>
        <p></p>
      </div>
      {/* {loading ? <Spinner /> : ""} */}

      <div className="flex flex-col border-2 border-sky-800 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" focus:bg-sky-100 border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="  focus:bg-sky-100 border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="  focus:bg-sky-100
               border-2 border-gray-500 px-4 py-2  w-full "
          />
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="  focus:bg-sky-100
               border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <button
            className=" p-2 bg-sky-800 text-white mt-8 w-40 rounded-lg mx-auto "
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
