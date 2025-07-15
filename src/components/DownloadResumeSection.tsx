
'use client';

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function DownloadResumeSection() {
  const handleDownload = () => {
    // Create a downloadable resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Logeshwaran_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 relative bg-black/[0.99]">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow 
          color="rgba(168, 85, 247, 0.08)" 
          animation={{
            scale: 40,
            speed: 20
          }} 
          noise={{
            opacity: 0.15,
            scale: 1.2
          }} 
          sizing="fill" 
          className="w-full h-full" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
            Download Resume
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-12">
            Get a comprehensive overview of my skills, experience, and achievements in a downloadable format.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownload}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handlePreview}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg flex items-center gap-3"
              >
                <Eye className="w-5 h-5" />
                Preview
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <FileText className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Professional Format</h3>
              <p className="text-neutral-300 text-sm">Clean, ATS-friendly design optimized for recruiters</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Download className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Instant Download</h3>
              <p className="text-neutral-300 text-sm">Get immediate access to my latest resume</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Eye className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Quick Preview</h3>
              <p className="text-neutral-300 text-sm">View before downloading to see what's included</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
