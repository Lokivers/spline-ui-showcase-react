import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GITHUB_USERNAME = "Lokivers";

export default function ShufflingProjectCards() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setRepos([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
    const interval = setInterval(() => {
      setRepos((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-400 animate-pulse">
        Loading your awesome projects...
      </div>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-10 bg-black text-white min-h-screen">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
        🎨 Shuffle Creative Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-gray-700 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-pink-500/30 transition-transform transform hover:-translate-y-2 group"
            >
              <div className="flex justify-end">
                <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-black font-bold">
                  Project
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-4 mb-2 group-hover:text-pink-400 transition-colors">
                {repo.name}
              </h3>

              <p className="text-sm text-gray-300 line-clamp-3 mb-6">
                {repo.description || "No description provided."}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-black font-semibold shadow hover:scale-[1.02] transition-transform"
              >
                🔍 View Code
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
