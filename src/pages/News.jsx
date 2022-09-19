import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [article, setArticle] = useState();
  const [search, setSearch] = useState();
  const [dataSearched, setDataSearched] = useState();

  useEffect(() => {
    retrieveArticle();
  }, []);

  const retrieveArticle = async () => {
    try {
      const { data } = await axios.get(`https://newsapi.org/v2/everything?from=2022-08-19&to=2022-08-19&sortBy=popularity&apiKey=9d4f7c792a4c41289762ba66484380f6&q=articles`);

      // console.log(data, "Response");
    } catch (error) {
      console.log(error, "Response Error");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios.get(`https://newsapi.org/v2/everything?from=2022-08-19&to=2022-08-19&sortBy=popularity&apiKey=9d4f7c792a4c41289762ba66484380f6&q=${search}`);
      console.log(data.articles, "Reponse Response Submit");
      setDataSearched(data.articles);
    } catch (error) {
      console.log(error, "Error Handle Submit");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <nav className="navbar bg-danger">
              <div className="container-fluid">
                <span className="navbar-brand text-white mb-0 h1">Tech News App</span>
              </div>
            </nav>

            <div className="row">
              <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mt-3">
                    <input onChange={handleChange} type="text" className="form-control" placeholder="Search News ..." />
                    <button className="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
              {dataSearched &&
                dataSearched.map((data, index) => {
                  console.log(data, "Data Searched");
                  return (
                    <div className="col-md-4 my-5">
                      <div className="card">
                        <img src={data.urlToImage} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{data.description}</h6>
                          <a href={data.url} className="btn btn-primary">
                            Go To Site
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
