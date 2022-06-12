import { gql } from "@apollo/client";
import type { NextPage } from "next";
import client from "../lib/apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });
  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}

const Home: NextPage = ({ countries }: any) => {
  return (
    <>
      {countries.map((v: any) => {
        return (
          <div key={v.code} style={{ display: "flex" }}>
            <h1 style={{ lineHeight: "100px" }}>{v.name}</h1>
            <div style={{ fontSize: "100px" }}>{v.emoji}</div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
