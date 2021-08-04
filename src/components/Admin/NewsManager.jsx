import { useSelector, useDispatch } from "react-redux";
import UploadNews from "./UploadNews";
import { deleteNews } from "../../store/selectAdminReducer";

function NewsManager() {
  const dispatch = useDispatch();

  const { newsToDelete } = useSelector((state) => {
    return {
      newsToDelete: state.selectAdminReducer.newsToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteNews(newsToDelete));
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#UploadNews"
              className="homeButton btn btn-primary btn-sm"
            >
              UPLOAD NEWS
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleDelete}
            >
              DELETE NEWS
            </button>
          </label>
        </div>
      </div>
      <UploadNews />
    </div>
  );
}

export default NewsManager;
