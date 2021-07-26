import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { assignNewsToDelete, getAllNews } from "../../store/selectAdminReducer";

function NewsList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignNewsToDelete(id));
  };

  const { newsList } = useSelector((state) => {
    return {
      newsList: state.selectAdminReducer.newsList,
    };
  });

  const renderTableNews = () => {
    return (
      !!newsList &&
      newsList.length > 0 &&
      newsList.map((news) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={news._id}
                name="newsToDelete"
                value={news._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>
              <img src={news.news} alt="News" className="d-block w-100" />
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Select</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>{renderTableNews()}</tbody>
    </table>
  );
}

export default NewsList;
