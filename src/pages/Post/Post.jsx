import Navbar from "../../components/Navbar";
import Post from "../../assets/post.png";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function postgaleri() {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://web.abdulhaxor.my.id/wp-json/wp/v2/posts/${params.id}?_embed`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.id) setPost(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {post ? (
        <>
          <Navbar />
          <section style={{ height: "30vh", width: "100vw" }}>
            <img
              src={
                post._embedded["wp:featuredmedia"]
                  ? post._embedded["wp:featuredmedia"][0].media_details.sizes
                      .medium.source_url
                  : "https://picsum.photos/350/350"
              }
              className="w-100 h-100 object-fit-cover"
            />
          </section>

          <section className="container mt-5">
            <h1>{post.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            ></div>
          </section>
          <Footer />
        </>
      ) : (
        <>data tidak di temukan </>
      )}
    </>
  );
}
