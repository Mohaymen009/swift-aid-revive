import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const posts = [
    {
      title: "How to Choose the Right Ambulance Service",
      excerpt: "Key factors to consider when selecting a medical transport provider in the UAE, from accreditation to response times.",
      date: "Jan 5, 2026",
      author: "EMRS Medical Team",
      slug: "/blog/how-to-choose-ambulance-service/"
    },
    {
      title: "Private Ambulance Services Across UAE",
      excerpt: "Understanding the benefits of private ambulance services for non-emergency and inter-facility transfers.",
      date: "Jan 3, 2026",
      author: "EMRS Team",
      slug: "/blog/private-ambulance-services-across-uae/"
    },
    {
      title: "Emergency Patient Transfers Explained",
      excerpt: "A guide to how emergency patient transfers work between hospitals and what keeps patients safe during the journey.",
      date: "Dec 28, 2025",
      author: "EMRS Operations",
      slug: "/blog/emergency-patient-transfers-uae/"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Latest Insights</span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mt-3 mb-4">
              Medical Transport Resources
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert advice, industry updates, and health guides from our medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1 group">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    <Link to={post.slug}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    to={post.slug}
                    className="text-accent font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
