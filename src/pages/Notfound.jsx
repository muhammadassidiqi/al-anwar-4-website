import MainLayout from "../layout/MainLayout";
import Musang from "../assets/Musang.webp";

export default function Notfound() {
  return (
    <>
      <MainLayout>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-8 py-5">
              <img src={Musang} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
