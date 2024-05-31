export default function Dashboard() {
  return (
    <>
      <section className=" container d-flex w-100 justify-content-center align-items-center section-admin py-5  ">
        <form className="border border-dark py-5 px-5">
          <div className="form-group ">
            <div className="justify-content-center">
              <h2>Al Anwar 4 Admin Login</h2>
            </div>

            <label htmlFor="exampleInputEmail1">Email address</label>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <i className="bi bi-person form-control flex-grow-0 w-auto"></i>
            </div>
          </div>
          <div className="form-group py-1">
            <label htmlFor="exampleInputPassword1">Password</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <i class="bi bi-lock form-control flex-grow-0 w-auto"></i>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
