import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/ui/blog-card";
import { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (error) {
    return (
      <section id="blog" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Latest Blog Posts</h2>
            <p className="text-red-400">Failed to load blog posts. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Latest Blog Posts</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on development, security, and the Minecraft ecosystem.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl animate-pulse">
                <div className="h-48 bg-slate-700 rounded-lg mb-4"></div>
                <div className="h-6 bg-slate-700 rounded mb-2"></div>
                <div className="h-4 bg-slate-700 rounded mb-4"></div>
                <div className="flex justify-between">
                  <div className="h-4 bg-slate-700 rounded w-24"></div>
                  <div className="h-4 bg-slate-700 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-green-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-green-secondary transition-all duration-300 neon-glow">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
}
