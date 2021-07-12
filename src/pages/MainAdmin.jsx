import AdminProfile from "../components/Admin/AdminProfile";
import AdminInfo from "../components/Admin/AdminInfo";
import News from "../components/General/News";
import AdminBar from "../components/Admin/AdminBar";

import "../styles/Admin.css";

function MainAdmin() {
	return (
		<div className="mainAdmin">
			<div className="admin-blockNavInfo">
				<div>
					<AdminProfile />
				</div>
				<div>
					<AdminBar />
				</div>
			</div>
			<div className="admin-blockInfo">
				<div>
					<AdminInfo />
				</div>
				<div>
					<News />
				</div>
			</div>
		</div>
	);
}

export default MainAdmin;
