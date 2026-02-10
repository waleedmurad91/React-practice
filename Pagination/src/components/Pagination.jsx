function Pagination({ total, perPage, setCurrPage, currPage }) {
  let page = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    page.push(i);
  }
  console.log(page);
  return (
    <>
      <ul className="text-white flex flex-row mx-auto gap-2">
        {page.map((elem, index) => {
          return (
            <li className="text-white" key={index}>
              <button
                onClick={() => {
                  setCurrPage(elem);
                }}
                className={`px-2  cursor-pointer rounded ${
                  elem === currPage ? "bg-orange-600 text-white" : "bg-slate-200 text-black"
                }`}
              >
                {elem}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pagination;
