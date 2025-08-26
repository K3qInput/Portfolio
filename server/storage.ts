import { users, contacts, blogPosts, type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBlogPostId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBlogPostId = 1;
    
    // Initialize with some sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Advanced Server Optimization Techniques",
        slug: "advanced-server-optimization-techniques",
        excerpt: "Learn how to optimize your Minecraft server for maximum performance with these advanced techniques and best practices.",
        content: "Server optimization is crucial for maintaining high performance...",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        category: "Tutorial",
        readTime: 5,
        published: true,
      },
      {
        title: "Essential Security Practices for Game Servers",
        slug: "essential-security-practices-for-game-servers",
        excerpt: "Protect your server from common threats with these essential security practices and anti-cheat configurations.",
        content: "Security is paramount in game server management...",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        category: "Security",
        readTime: 8,
        published: true,
      },
      {
        title: "Building Modern Minecraft Plugins",
        slug: "building-modern-minecraft-plugins",
        excerpt: "A comprehensive guide to developing modern, efficient plugins using the latest development practices.",
        content: "Modern plugin development requires understanding of best practices...",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        category: "Development",
        readTime: 12,
        published: true,
      },
    ];

    samplePosts.forEach(post => {
      this.createBlogPost(post);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date(),
      read: false
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug && post.published
    );
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id,
      createdAt: new Date(),
      image: insertBlogPost.image || null,
      published: insertBlogPost.published || false,
      githubUrl: insertBlogPost.githubUrl || null
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(blogPosts.createdAt);
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db
      .insert(blogPosts)
      .values(insertBlogPost)
      .returning();
    return blogPost;
  }

  async initializeData(): Promise<void> {
    // Check if we already have blog posts
    const existingPosts = await this.getBlogPosts();
    if (existingPosts.length > 0) {
      return; // Data already exists
    }

    // Initialize with sample blog posts
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Advanced Server Optimization Techniques",
        slug: "advanced-server-optimization-techniques",
        excerpt: "Learn how to optimize your Minecraft server for maximum performance with these advanced techniques and best practices.",
        content: "Server optimization is crucial for maintaining high performance...",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        category: "Tutorial",
        readTime: 5,
        published: true,
      },
      {
        title: "Essential Security Practices for Game Servers",
        slug: "essential-security-practices-for-game-servers",
        excerpt: "Protect your server from common threats with these essential security practices and anti-cheat configurations.",
        content: "Security is paramount in game server management...",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        category: "Security",
        readTime: 8,
        published: true,
      },
      {
        title: "Building Modern Minecraft Plugins",
        slug: "building-modern-minecraft-plugins",
        excerpt: "A comprehensive guide to developing modern, efficient plugins using the latest development practices.",
        content: "Modern plugin development requires understanding of best practices...",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        category: "Development",
        readTime: 12,
        published: true,
      },
    ];

    for (const post of samplePosts) {
      await this.createBlogPost(post);
    }
  }
}

export const storage = new MemStorage();
