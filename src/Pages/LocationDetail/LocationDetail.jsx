import React, { useEffect, useState } from "react";
import "./LocationDetail.css";
import SimpleHeader from "../../Components/SimpleHeader/SimpleHeader";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LocationDetail = () => {

  const { slug } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);


  // =========================
  // FETCH PAGE DATA
  // =========================

  useEffect(() => {

    const fetchPage = async () => {

      try {

        const res = await fetch(
          `https://webmok-dm-backend.onrender.com/api/location/page/${slug}`
        );

        const data = await res.json();

        setPage(data);
        setLoading(false);

      } catch (error) {

        console.log(error);
        setLoading(false);

      }

    };

    fetchPage();

  }, [slug]);


  if (loading) {
    return <div style={{padding:"80px", textAlign:"center"}}>Loading...</div>;
  }


  if (!page) {
    return <div style={{padding:"80px", textAlign:"center"}}>Page not found</div>;
  }


  return (

    <div>

      {/* SEO META TAGS */}

    <Helmet>

    <title>{page.seoTitle}</title>

    <meta
    name="description"
    content={page.metaDescription}
    />

    <meta
    name="keywords"
    content={page.metaKeywords}
    />

    </Helmet>


      <SimpleHeader title={page.seoTitle} breadcrumb={page.slug} />


      {/* BLOG CONTENT */}

      <section className="location-article-wrapper">

        <div className="location-article-container">

          <div
            className="location-article-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />

        </div>

      </section>


      <div className="footer-div">
        <Footer />
      </div>

    </div>

  );

};

export default LocationDetail;