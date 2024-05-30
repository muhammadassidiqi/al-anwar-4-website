export default function Dashboard() {
  return (
    <>
      <section
        className=" container d-flex w-100 justify-content-center align-items-center  "
        style={{
          height: "100vh",
        }}
      >
        <form className="border border-dark py-5 px-5">
          <div className="form-group ">
            <div className="justify-content-center">
              <h2>Al Anwar 4 Admin Login</h2>
            </div>

            <label htmlFor="exampleInputEmail1">Email address</label>

            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group py-1">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label py-1" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary py-1">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
