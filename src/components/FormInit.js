function FormInit({ handleChange, email, password }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
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
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          className="form-control"
        />
      </div>
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
    </form>
  );
}

export default FormInit;
