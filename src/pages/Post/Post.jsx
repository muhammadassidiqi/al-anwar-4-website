import Navbar from "../../components/Navbar";
import Post from "../../assets/post.png";
import Footer from "../../components/Footer";

export default function postgaleri() {
  return (
    <>
      <Navbar />
      <section style={{ height: "30vh", width: "100vw" }}>
        <img
          className="w-100 h-100 object-fit-cover"
          src={Post}
          alt="postgaleri"
        />
      </section>

      <section className="container mt-5">
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          voluptates ex excepturi deleniti obcaecati omnis provident placeat
          ipsa aspernatur assumenda atque totam fugiat, beatae velit animi
          repellendus eius pariatur laudantium ad doloribus quibusdam
          perferendis? Voluptas accusantium quod quisquam magnam ratione quidem
          saepe ad natus exercitationem, quibusdam vero. Labore, atque,
          dignissimos vero enim non nihil ipsum at rem cumque amet praesentium
          iure doloribus. Enim voluptates numquam a est, consequuntur repellat
          consequatur. Excepturi atque delectus, repudiandae quia molestiae,
          aspernatur voluptas, dicta beatae tempora enim nemo! Illum maiores,
          soluta dolore officia eos aut necessitatibus reiciendis, fuga
          consequuntur rerum perspiciatis tempore dignissimos nam asperiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab sunt
          a eaque voluptatibus magni corrupti libero ipsa quae animi? Pariatur
          quod atque a inventore alias veniam exercitationem debitis
          necessitatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error
          odio eius, at necessitatibus, ducimus vero magni quibusdam odit soluta
          sequi earum similique quod voluptatibus illum ab quas aliquam
          accusantium.
        </p>
      </section>
      <Footer />
    </>
  );
}
