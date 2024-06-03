import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://diki.neuversity.site/wp-json/jwt-auth/v1/token", {
      method: "POST",
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    })
      .then((resp) => resp.json())

      .then((data) => {
        console.log(data);
        if (data.token) {
          Swal.fire({
            title: "success",
            text: "anda telah berhasil login",
            icon: "success",
          });

          // set token ke localstorage
          localStorage.setItem("token", data.token);
          navigate("/admin");
        } else {
          Swal.fire({
            title: "Error!",
            text: "username dan password anda salah",
            icon: "error",
          });
        }
      })

      .catch((error) => console.error("Error:", error));
  }
  return (
    <>
      <section className=" container d-flex w-100 justify-content-center align-items-center section-admin py-5  ">
        <form className="border border-dark py-5 px-4  px-md-5">
          <div className="form-group ">
            <div className="justify-content-center">
              <h2>Al Anwar 4 Admin Login</h2>
            </div>

            <label htmlFor="exampleInputEmail1">Email address</label>

            <div className="input-group">
              <input
                type="email"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                placeholder="Password"
              />
              <i class="bi bi-lock form-control flex-grow-0 w-auto"></i>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary mt-2"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
