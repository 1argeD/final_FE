import React from "react";
import Header from "../../components/elements/GlobalHeader";
import Layout from "../../components/elements/GlobalLayout";
import MyPages from "../../components/myPage/MyPage";

const MyPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <MyPages />
      </Layout>
    </>
  );
};

export default MyPage;
