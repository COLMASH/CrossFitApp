import { Link, useHistory } from "react-router-dom";

function UserBar() {
	const history = useHistory();

	function Logout() {
		localStorage.removeItem("token");
		history.push("/");
	}
	return (
		<nav>
			<div className="userNavContainer d-grid gap-3">
				<Link
					to="/Reservations"
					className="userLinkButton btn btn-primary link"
				>
					<strong>YOUR RESERVATIONS</strong>
				</Link>
				<Link to="/WodUser" className="userLinkButton btn btn-primary link">
					<strong>WODs</strong>
				</Link>
				<Link to="/Performance" className="userLinkButton btn btn-primary link">
					<strong>YOUR PERFORMANCE</strong>
				</Link>
				<Link to="/Penalties" className="userLinkButton btn btn-primary link">
					<strong>RESERVATIONS PENALTIES</strong>
				</Link>
				<button
					type="button"
					onClick={Logout}
					className="userButton btn btn-primary"
				>
					<strong>LOG OUT</strong>
				</button>
			</div>
		</nav>
	);
}

export default UserBar;
