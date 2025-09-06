import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, GitFork, Eye } from "lucide-react";

const GITHUB_USERNAME = "Lokivers";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      const filteredRepos = data
        .filter((repo) => !repo.fork && !repo.archived)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 12); // Show max 12 repos
      
      setRepos(filteredRepos);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchRepos, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
              Loading Projects
            </div>
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Fetching latest repositories from GitHub...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="py-20">
            <Badge variant="destructive" className="mb-4">Error</Badge>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Unable to fetch GitHub projects
            </h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={fetchRepos} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            GitHub Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest open-source projects and contributions on GitHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border bg-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                        {repo.name}
                      </CardTitle>
                      <Badge variant="outline" className="ml-2 flex-shrink-0">
                        {repo.language || 'Code'}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2 min-h-[3rem]">
                      {repo.description || "No description available for this repository."}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                      {repo.watchers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{repo.watchers_count}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        asChild 
                        className="flex-1"
                        variant="default"
                      >
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                      {repo.homepage && (
                        <Button 
                          asChild 
                          variant="outline"
                          size="icon"
                        >
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {repos.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No repositories found.</p>
          </div>
        )}
        
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
