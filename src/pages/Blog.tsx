import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    id: 1,
    title: "Behind the Scenes: A Day in the Life of a Photographer",
    excerpt: "Discover what goes into capturing the perfect shot, from pre-dawn setups to post-processing magic.",
    image: blog1,
    date: "March 15, 2026",
    author: "James",
    category: "Photography",
  },
  {
    id: 2,
    title: "Essential Camera Gear for 2026",
    excerpt: "A comprehensive guide to the must-have equipment every photographer needs in their kit this year.",
    image: blog2,
    date: "March 8, 2026",
    author: "James",
    category: "Gear",
  },
  {
    id: 3,
    title: "Mastering Golden Hour Photography",
    excerpt: "Tips and techniques for making the most of that magical window of warm, soft light.",
    image: blog3,
    date: "February 28, 2026",
    author: "James",
    category: "Tips",
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHero title="Blog" breadcrumb="Blog" />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-card shadow-lg group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </span>
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
