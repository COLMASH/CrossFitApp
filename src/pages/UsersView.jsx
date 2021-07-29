import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import UsersList from "../components/User/UsersList";

import "../styles/AdminsView.css";

function UsersView() {
	return (
		<div className="Admins">
			<div className="admins-blockNavInfo">
				<div>
					<AdminProfile />
				</div>
				<div className="adminBar-desktop">
					<AdminBar />
				</div>
			</div>
			<div className="admins-blockManager">
				<h3>BOX USERS</h3>
				<UsersList />
			</div>
		</div>
	);
}

export default UsersView;
