import React from "react";
import axios from "axios";

import MainLayout from "../components/layout/MainLayout";

const Home = ({ token }) => {
  const [books, setBooks] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const books = await axios.get("https://api.marktube.tv/v1/book", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setBooks(books.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchBooks();
  // }, [token]);

  return (
    <MainLayout>
      <h1>Home</h1>
    </MainLayout>
  );
};

export default Home;
