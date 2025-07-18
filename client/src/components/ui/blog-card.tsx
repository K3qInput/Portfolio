import { motion } from "framer-motion";
import { BlogPost } from "@shared/schema";
import { Github, ExternalLink } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Tutorial": "bg-green-500 text-white",
      "Security": "bg-red-500 text-white",
      "Development": "bg-blue-500 text-white",
      "Tips": "bg-yellow-500 text-white",
    };
    return colors[category] || "bg-slate-500 text-white";
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-2xl overflow-hidden transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-green-primary mb-2 hover:text-lime-accent transition-colors duration-300">
          <a href="#" className="cursor-pointer">
            {post.title}
          </a>
        </h3>
        
        <p className="text-slate-400 mb-4 text-sm line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
          <span>{formatDate(post.createdAt)}</span>
          <span>{post.readTime} min read</span>
        </div>

        {post.githubUrl && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <span className="text-sm text-slate-400">View on GitHub</span>
            <a
              href={post.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-primary hover:text-green-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
