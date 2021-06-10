function FormInit({ handleChange, email, password }) {
  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="example@email.com"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button type="submit" disabled={email === ""}>
        Log In
      </button>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default FormInit;
