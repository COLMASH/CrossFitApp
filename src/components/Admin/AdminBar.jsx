import { Link, useHistory } from "react-router-dom";

function AdminBar() {

  const history = useHistory();

	function Logout() {
		localStorage.removeItem("token");
		history.push("/");
	}
	return (
		<nav>
			<div className="adminNavContainer d-grid gap-3">
				<Link to="/BoxStats" className="adminLinkButton btn btn-primary link">
					<strong>BOX STATS</strong>
				</Link>
				<Link to="/Users" className="adminLinkButton btn btn-primary link">
					<strong>USERS</strong>
				</Link>
				<Link to="/Coaches" className="adminLinkButton btn btn-primary link">
					<strong>COACHES</strong>
				</Link>
				<Link to="/Coaches" className="adminLinkButton btn btn-primary link">
					<strong>UPDATE NEWS</strong>
				</Link>
				<button
					type="button"
					onClick={Logout}
					className="adminButton btn btn-primary"
				>
					<strong>LOG OUT</strong>
				</button>
			</div>
		</nav>
	);

}

export default AdminBar;
