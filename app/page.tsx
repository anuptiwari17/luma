"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { 
  Play, 
  Upload, 
  Users, 
  Zap, 
  Star, 
  ArrowRight, 
  Video,
  Sparkles,
  Globe,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";
import VideoFeed from "./components/VideoFeed";
import { useEffect, useState } from "react";
import { IVideo } from "@/models/Video";

export default function LandingPage() {
  const { data: session } = useSession();
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/videos');
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      }
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Video Platform
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  Share Your
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Creative Vision
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Upload, share, and discover amazing videos with our cutting-edge platform. 
                  Join millions of creators and viewers in the ultimate video sharing experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {session ? (
                    <Link
                      href="/upload"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <Upload className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                      Upload Your Video
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/register"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        Get Started Free
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/login"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 font-semibold rounded-2xl transition-all duration-300"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Videos
                      </Link>
                    </>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">10M+</div>
                    <div className="text-gray-600">Videos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">5M+</div>
                    <div className="text-gray-600">Creators</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">100M+</div>
                    <div className="text-gray-600">Views</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Video Preview */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center">
                        <Play className="w-16 h-16 text-white/80" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                          <div className="h-4 bg-white/20 rounded w-24"></div>
                        </div>
                        <div className="flex gap-2">
                          <Heart className="w-5 h-5 text-white/60" />
                          <MessageCircle className="w-5 h-5 text-white/60" />
                          <Share2 className="w-5 h-5 text-white/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <Star className="w-6 h-6 text-yellow-800" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce delay-500">
                    <TrendingUp className="w-6 h-6 text-green-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose VideoShare?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the next generation of video sharing with our innovative features
                designed for creators and viewers alike.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast",
                  description: "Ultra-fast video processing and streaming with global CDN delivery.",
                  color: "yellow"
                },
                {
                  icon: <Video className="w-8 h-8" />,
                  title: "HD Quality",
                  description: "Crystal clear video quality with adaptive streaming technology.",
                  color: "blue"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Global Community",
                  description: "Connect with creators and viewers from around the world.",
                  color: "green"
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "AI Enhanced",
                  description: "Smart recommendations and automated video optimization.",
                  color: "purple"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Worldwide Access",
                  description: "Access your content anywhere with our global infrastructure.",
                  color: "indigo"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Analytics",
                  description: "Detailed insights to help you grow your audience.",
                  color: "pink"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-gray-200"
                >
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-${feature.color}-600`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Feed Section */}
      {videos.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Trending Videos
                </h2>
                <p className="text-xl text-gray-600">
                  Discover the most popular content from our amazing creators
                </p>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-gray-200 animate-pulse rounded-2xl h-80"></div>
                  ))}
                </div>
              ) : (
                <VideoFeed videos={videos.slice(0, 8)} />
              )}

              <div className="text-center mt-12">
                <Link
                  href="/videos"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Videos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join thousands of creators who are already sharing their passion with the world.
              Your audience is waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {session ? (
                <Link
                  href="/upload"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Upload className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                  Start Creating Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Join Free Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}