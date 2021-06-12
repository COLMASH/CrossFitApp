function FormInit({ handleChange, email, password }) {
  return (
    <div>
      <div className="form-gen">
        <form>
          <div className="form-group">
            <label htmlFor="email">
              <strong> Email: </strong>
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
              value={email}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password: </strong>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              className="form-control"
            />
          </div>
        </form>
      </div>
      <div className="bttn">
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          disabled={email === ""}
        >
          Log In
        </button>
        <button className="btn btn-primary btn-sm" type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default FormInit;
