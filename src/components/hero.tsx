"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import ownImage from "@/assets/images/about.png";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 md:gap-12 items-center">
        <div className=" order-2 md:order-1 space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Engr Abu Kowsar (PMP, PMI-ACP)
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-accent leading-tight">
              Technical Project Manager
            </h2>
          </div>

          {/* Availability Section */}
          <div className="flex justify-between items-center py-4">
            <div>
              <p className="text-lg font-semibold text-muted-foreground">Availability</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-muted-foreground">Part-time / Consulting</p>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="w-full">
            <button
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-teal-400/50 text-lg"
            >
              <Download size={20} />
              Download Resume (PDF)
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 font-medium text-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors"
            >
              Upwork
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center gap-8 pt-8">
            <div className="text-center space-y-1">
              <p className="text-3xl font-bold text-accent">100+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-3xl font-bold text-accent">12+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className=" order-1 md:order-2 md:flex flex-col items-center justify-center relative h-[550px] md:h-[500px]">
          {/* Main avatar circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-60 h-60 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border-2 border-accent/20">
              <div
                className={`text-8xl transition-transform duration-1000 ${
                  mounted ? "scale-100" : "scale-75"
                }`}
              >
                <Image
                  src={ownImage}
                  alt="Avatar"
                  className="rounded-full object-cover"
                  width={220}
                  height={220}
                />
              </div>
            </div>
          </div>

          {/* Floating card - React */}
          <div
            className={`absolute  top-4 left-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted ? "float 6s ease-in-out infinite" : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">Project</p>
                <p className="text-xs text-muted-foreground">Management</p>
              </div>
            </div>
          </div>

          {/* Floating card - Next.js */}
          <div
            className={`absolute bottom-8 right-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted ? "float 8s ease-in-out infinite 1s" : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">AI</p>
                <p className="text-xs text-muted-foreground">Integration</p>
              </div>
            </div>
          </div>

          {/* Floating card - TypeScript */}
          <div
            className={`absolute top-1/7 md:top-1/3 right-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted
                ? "float 7s ease-in-out infinite 0.5s"
                : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">
                  Agile 
                </p>
                <p className="text-xs text-muted-foreground">Specialist</p>
              </div>
            </div>
          </div>

          {/* Floating card - Tailwind */}
          <div
            className={`absolute bottom-12 left-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted
                ? "float 8s ease-in-out infinite 1.5s"
                : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">
                  Industrial
                </p>
                <p className="text-xs text-muted-foreground">Designer</p>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

          {/* Download Resume & Portfolio Quick Access */}
          <div
            className={`absolute -bottom-5 md:bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              {/* Download Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-xl font-semibold hover:from-accent/90 hover:to-accent/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/25 text-sm cursor-pointer hover:scale-105"
              >
                <Download size={16} />
                Download Resume (PDF)
              </button>

              {/* Quick Portfolio Access */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>or</span>
                <Link
                  href="/portfolio"
                  className="text-accent hover:text-accent/80 font-medium underline underline-offset-2 hover:no-underline transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Showcase - Positioned below the avatar */}
          <div
            className={`absolute -bottom-32 md:-bottom-28 left-1/2 transform -translate-x-1/2 w-full max-w-md transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted ? "float 10s ease-in-out infinite 2s" : "none",
            }}
          >
            <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-3">
                <h3 className="text-sm font-semibold text-foreground mb-1 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  Featured Projects
                </h3>
                <p className="text-xs text-muted-foreground">Recent work highlights</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg p-2 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">AI Fact-Checker</div>
                  <div className="text-xs text-muted-foreground">Bangla Platform</div>
                </div>
                
                <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg p-2 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">LLM Platform</div>
                  <div className="text-xs text-muted-foreground">Bangla AI</div>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg p-2 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">ERP System</div>
                  <div className="text-xs text-muted-foreground">Enterprise</div>
                </div>
                
                <div className="group bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-lg p-2 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">CMS Platform</div>
                  <div className="text-xs text-muted-foreground">Digital Solution</div>
                </div>
              </div>
              
              <Link
                href="/portfolio"
                className="block w-full text-center px-3 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-xs font-medium hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
              >
                View More Projects →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
