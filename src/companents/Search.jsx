import React, { useRef, useContext } from "react";
import { GithubContext } from "../context/Context";

export default function Search() {
  const { request, err, myUser, isloading } = useContext(GithubContext);
  const inputRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      myUser(inputRef.current.value);
    }
 
  };

  return (
    <div className="content flex items-center">
      <div className="my-10 w-3/4 ">
        {err.show && (
          <div>
            <p className="text-center text-red-600 text-lg py-2 font-semibold">
              {err.msg}
            </p>
          </div>
        )}
        <form
          action=""
          onSubmit={submit}
          className="flex pr-5 items-center justify-between w-full"
        >
          <div className="flex bg-white px-3 py-1.5  justify-between rounded w-full">
            <input
              ref={inputRef}
              type="text"
              placeholder="enter username"
              className="border-none outline-none w-full"
            />
            {request > 0 && !isloading && (
              <button
                className="bg-cyan-700 hover:bg-cyan-600 duration-200 text-white  font-semibold py-1.5 px-3 rounded"
                type="submit"
              >
                Search
              </button>
            )}
          </div>
        </form>
      </div>
      <h3 className="w-1/4 text-slate-500 text-2xl py-3">
        Requests: {request}/80
      </h3>
    </div>
  );
}
