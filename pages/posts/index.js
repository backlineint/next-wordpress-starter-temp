import { NextSeo } from "next-seo";

import PageHeader from "../../components/page-header.js";
import Layout from "../../components/layout";

export default function PostsListTemplate({
}) {
  return (
    <Layout>
      <NextSeo
        title="Decoupled Next Drupal Demo"
        description="Generated by create next app."
      />
      <PageHeader title="Articles" />
      <section>
        <div className="mt-20 flex justify-center">
            <span className="text-3xl">
                🚧 This is a placeholder for the articles list.
            </span>
        </div>
      </section>
    </Layout>
  );
}