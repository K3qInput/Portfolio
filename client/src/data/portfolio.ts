import { Project, Experience, BlogPost } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "DeluxeMenu GUI-HUB",
    description: "Custom GUI for Minecraft with intuitive layout and plugin support. Features modern design principles and responsive interactions.",
    image: "https://64.media.tumblr.com/13699359580633d7379407c51ad572e8/4ff958ab667f39b1-7c/s500x750/f83ac7e133885d3460ebd9b25970b3fbc0d5700b.gif",
    category: "gui",
    technologies: ["Java", "YAML", "Minecraft API"],
    githubUrl: "https://github.com/K3qInput/GUI-HUB",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Matrix Custom Config",
    description: "Advanced anti-cheat configuration with custom detection algorithms and real-time monitoring capabilities.",
    image: "https://i.imgur.com/Fukuzmp.png",
    category: "security",
    technologies: ["Security", "Config", "Anti-cheat"],
    githubUrl: "https://github.com/K3qInput/Matrix-Custom-Config",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Server IP Hider",
    description: "Advanced IP protection system with proxy detection and DDoS mitigation for enhanced server security.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "optimization",
    technologies: ["Network", "Security", "Protection"],
    githubUrl: "https://github.com/K3qInput/Server-Ip-Hider",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "SH-Union Platform",
    description: "Collaborative platform for server management with real-time collaboration tools and advanced analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "gui",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/valexcloud/SH-Union",
    liveUrl: "#"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Minecraft Developer & Project Manager",
    company: "Freelance",
    period: "2022 - Present",
    description: "Leading server optimization, security implementations, and team management for various Minecraft communities. Specializing in anti-cheat systems, Skript development, and marketing strategies.",
    technologies: ["Java", "Skript", "Security", "Performance", "Management", "Marketing"],
    type: "current"
  },
  {
    id: 2,
    title: "Plugin Developer & Configuration Specialist",
    company: "Various Servers",
    period: "2020 - 2022",
    description: "Developed custom plugins, GUI systems, and server configurations for Minecraft servers. Focused on user experience, server stability, and advanced Skript implementations.",
    technologies: ["Java", "Skript", "YAML", "MySQL", "GUI", "Configuration"],
    type: "past"
  },
  {
    id: 3,
    title: "Network Administrator & Security Specialist",
    company: "Gaming Communities",
    period: "2019 - 2020",
    description: "Managed server infrastructure, network architecture, and security for gaming communities. Implemented DDoS protection, monitoring systems, and network optimization strategies.",
    technologies: ["Linux", "Network Architecture", "Security", "Monitoring", "DDoS Protection"],
    type: "past"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Advanced Server Optimization Techniques",
    slug: "advanced-server-optimization-techniques",
    excerpt: "Learn how to optimize your Minecraft server for maximum performance with these advanced techniques and best practices.",
    content: `
# Advanced Server Optimization Techniques

Server optimization is crucial for maintaining high performance and ensuring a smooth experience for your players. In this guide, I'll share some advanced techniques that I've developed over my 5+ years of experience in Minecraft server development.

## Memory Management

Proper memory management is the foundation of server optimization. Here are key strategies:

### JVM Arguments
Using the right JVM arguments can significantly improve performance:
- Use G1GC for better garbage collection
- Set appropriate heap sizes based on your server's needs
- Enable JIT compilation optimizations

### Plugin Optimization
- Audit your plugins regularly for memory leaks
- Use async operations where possible
- Implement proper caching strategies

## Network Optimization

Network performance directly impacts player experience:

### Connection Handling
- Implement connection pooling
- Use compression for data transfer
- Optimize packet handling

### Anti-DDoS Measures
- Deploy proper firewall rules
- Use rate limiting
- Implement geo-blocking where necessary

## Database Optimization

Database performance is often the bottleneck:

### Query Optimization
- Use proper indexing
- Implement connection pooling
- Cache frequently accessed data

### Data Structure
- Normalize your database schema
- Use appropriate data types
- Implement proper backup strategies

## Monitoring and Profiling

Continuous monitoring helps identify issues before they become problems:

### Performance Metrics
- Track TPS (Ticks Per Second)
- Monitor memory usage
- Watch network latency

### Profiling Tools
- Use tools like Spark for performance profiling
- Implement custom metrics for your specific needs
- Set up alerting for critical thresholds

## Conclusion

Server optimization is an ongoing process that requires constant attention and refinement. By implementing these techniques and continuously monitoring your server's performance, you can ensure optimal gameplay experience for your community.
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "Tutorial",
    readTime: 5,
    published: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    title: "Essential Security Practices for Game Servers",
    slug: "essential-security-practices-for-game-servers",
    excerpt: "Protect your server from common threats with these essential security practices and anti-cheat configurations.",
    content: `
# Essential Security Practices for Game Servers

Security is paramount in game server management. Over my years of experience, I've encountered numerous security challenges and developed comprehensive solutions to protect gaming communities.

## Authentication and Authorization

### Multi-Factor Authentication
- Implement 2FA for admin accounts
- Use strong password policies
- Regular password rotation schedules

### Role-Based Access Control
- Implement granular permission systems
- Use principle of least privilege
- Regular access reviews and audits

## Anti-Cheat Systems

### Detection Mechanisms
- Real-time behavior analysis
- Pattern recognition algorithms
- Community reporting systems

### Prevention Strategies
- Code obfuscation techniques
- Regular security updates
- Proactive monitoring

## Network Security

### Firewall Configuration
- Configure proper port restrictions
- Implement IP whitelisting
- Use fail2ban for brute force protection

### DDoS Protection
- Deploy CDN services
- Implement rate limiting
- Use geographic filtering

## Data Protection

### Encryption
- Use SSL/TLS for all communications
- Encrypt sensitive data at rest
- Implement proper key management

### Backup Strategies
- Regular automated backups
- Test restoration procedures
- Offsite backup storage

## Monitoring and Incident Response

### Security Monitoring
- Real-time threat detection
- Log analysis and correlation
- Automated alerting systems

### Incident Response
- Develop incident response plans
- Regular security drills
- Post-incident analysis

## Conclusion

Security in gaming environments requires a multi-layered approach. By implementing these practices and staying updated with the latest security trends, you can protect your community and maintain trust with your players.
    `,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "Security",
    readTime: 8,
    published: true,
    createdAt: new Date("2024-01-10"),
  },
  {
    id: 3,
    title: "Building Modern Minecraft Plugins",
    slug: "building-modern-minecraft-plugins",
    excerpt: "A comprehensive guide to developing modern, efficient plugins using the latest development practices.",
    content: `
# Building Modern Minecraft Plugins

Modern plugin development has evolved significantly. In this guide, I'll share the best practices and techniques I've developed for creating efficient, maintainable plugins.

## Development Environment Setup

### IDE Configuration
- Use IntelliJ IDEA with proper plugins
- Configure code formatting and style
- Set up debugging environments

### Version Control
- Use Git for version control
- Implement proper branching strategies
- Regular commits with meaningful messages

## Plugin Architecture

### Design Patterns
- Implement MVC architecture
- Use dependency injection
- Apply SOLID principles

### Performance Considerations
- Minimize main thread usage
- Use async operations
- Implement proper caching

## API Integration

### Bukkit/Spigot APIs
- Understand event handling
- Proper listener management
- Resource cleanup

### Database Integration
- Use connection pooling
- Implement proper error handling
- Data validation and sanitization

## Testing and Quality Assurance

### Unit Testing
- Write comprehensive tests
- Use mocking frameworks
- Continuous integration

### Code Quality
- Use static analysis tools
- Regular code reviews
- Performance profiling

## Deployment and Distribution

### Build Systems
- Use Maven or Gradle
- Automated building
- Dependency management

### Distribution
- Create proper documentation
- Version management
- Update mechanisms

## Conclusion

Modern plugin development requires attention to architecture, performance, and maintainability. By following these practices, you can create plugins that not only work well but are also easy to maintain and extend.
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "Development",
    readTime: 12,
    published: true,
    createdAt: new Date("2024-01-05"),
  },
];