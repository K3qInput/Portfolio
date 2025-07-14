import { useState, useEffect } from 'react';
import { projects, experiences, blogPosts } from '@/data/portfolio';
import { Project, Experience, BlogPost } from '@/types/portfolio';

// Static data hooks for Netlify deployment
export function useProjects() {
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setData(projects);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

export function useExperiences() {
  const [data, setData] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(experiences);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

export function useBlogPosts() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(blogPosts);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

export function useBlogPost(slug: string) {
  const [data, setData] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const post = blogPosts.find(post => post.slug === slug);
      setData(post || null);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  return { data, isLoading };
}