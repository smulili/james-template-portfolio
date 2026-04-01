import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  return (
    <Layout>
      <PageHero title="Gallery" breadcrumb="Gallery" />
      <GalleryGrid />
    </Layout>
  );
};

export default Gallery;
