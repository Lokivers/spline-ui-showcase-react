import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "Lokivers"; // <-- Your GitHub username

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setRepos([]);
        alert("Failed to fetch repositories: " + error.message);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const shuffleRepos = () => {
    setRepos((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  if (loading) {
    return (
      <section className="py-12 text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Featured Projects
        </h2>
        <div className="text-gray-400 animate-pulse">Loading repositories...</div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
        Featured Projects
      </h2>
      <h1 className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 mb-6">A showcase of my recent work, demonstrating expertise in modern web and mobile technologies.</h1>

      {/* Shuffle button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={shuffleRepos}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Shuffle Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {repos.map((repo, idx) => (
          <div
            key={repo.id}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 rounded-3xl p-6 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            {/* Category Tag */}
            <div className="flex justify-end">
              <span className="bg-blue-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Project
              </span>
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-bold mt-4 text-white">{repo.name}</h3>
            <p className="text-gray-300 text-sm mt-2 mb-4">
              {repo.description || "No description provided"}
            </p>

            {/* Tech Stack Tags (just mock for now, you can customize later) */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-gray-700 rounded-full text-gray-200">
                React
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-gray-700 rounded-full text-gray-200">
                TailwindCSS
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-gray-700 rounded-full text-gray-200">
                API
              </span>
            </div>

            {/* View Code Button */}
            <div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
