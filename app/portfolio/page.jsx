"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "./data";

export default function PortfolioPage() {
  const [expandedCards, setExpandedCards] = useState({});
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const gridSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = portfolioData;
  const filters = ["All", "Next js", "React", "Shopify", "Webflow"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;

    const techStack = (project.technology || []).map((item) => item.toLowerCase());

    if (activeFilter === "Next js") {
      return techStack.some((item) => item.includes("next") || item.includes("react"));
    }

    if (activeFilter === "React") {
      return techStack.some((item) => item.includes("react"));
    }

    if (activeFilter === "Shopify") {
      return techStack.some((item) => item.includes("shopify"));
    }

    if (activeFilter === "Webflow") {
      return techStack.some((item) => item.includes("webflow"));
    }

    return false;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  useEffect(() => {
    AOS.refresh();
  }, [currentPage, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage) return;
    setCurrentPage(pageNumber);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const toggleDescription = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-[#0EA5E9] top-0 left-0" />
          <div className="blob w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] bg-[#6366F1] bottom-0 right-0" style={{ animationDelay: "3s" }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="section-badge mb-6">Our Portfolio</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
            Our <span className="gradient-text">Successful Projects</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
            Explore our creative solutions and success stories. See what we can do for you.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Portfolio Grid ── */}
      <section ref={gridSectionRef} className="py-20 px-6 md:px-16 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                    : "bg-transparent text-[#94A3B8] border-[#1E293B] hover:border-[#0EA5E9] hover:text-[#F1F5F9]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {paginatedProjects.length === 0 ? (
            <div className="glass-card p-12 text-center max-w-lg mx-auto border border-[#1E293B]">
              <p className="text-xl font-semibold text-[#F1F5F9] mb-2">No projects found</p>
              <p className="text-[#94A3B8] text-sm mb-6">
                There are currently no projects matching the &quot;{activeFilter}&quot; filter.
              </p>
              <button
                type="button"
                onClick={() => handleFilterChange("All")}
                className="btn-primary text-sm px-5 py-2.5"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((project, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={(index % 6) * 100}
                  key={project.id || index}
                  className="glass-card overflow-hidden group flex flex-col h-full"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/prt1.png"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.live_link ? (
                        <Link
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#0F172A]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0EA5E9]"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      ) : null}
                      {project.client_link ? (
                        <Link
                          href={project.client_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#0F172A]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#6366F1]"
                        >
                          <FaGithub className="w-5 h-5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#F1F5F9] mb-3 group-hover:text-[#0EA5E9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#94A3B8] mb-4 flex-grow">
                      {expandedCards[project.id]
                        ? project.description
                        : project.description?.length > 140
                          ? `${project.description.slice(0, 140)}...`
                          : project.description}
                    </p>

                    {project.description?.length > 140 ? (
                      <button
                        type="button"
                        onClick={() => toggleDescription(project.id)}
                        className="text-sm font-medium text-[#0EA5E9] hover:text-[#22D3EE] transition-colors self-start mb-6"
                      >
                        {expandedCards[project.id] ? "Show less" : "View full details"}
                      </button>
                    ) : null}
                    
                    {project.technology?.length ? (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technology.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#7DD3FC] rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Pagination Controls ── */}
          {totalPages > 1 && (
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-[#1E293B]">
              <p className="text-sm text-[#94A3B8]">
                Showing <span className="font-semibold text-[#F1F5F9]">{startIndex + 1}</span>–
                <span className="font-semibold text-[#F1F5F9]">
                  {Math.min(endIndex, filteredProjects.length)}
                </span>{" "}
                of <span className="font-semibold text-[#F1F5F9]">{filteredProjects.length}</span> projects
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#1E293B] disabled:hover:text-[#94A3B8] border-[#1E293B] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#F1F5F9] bg-[#0F172A]/80 backdrop-blur-md"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                      <span key={`ellipsis-${idx}`} className="px-2 text-[#64748B] text-sm select-none">
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[40px] h-10 px-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center ${
                          currentPage === page
                            ? "bg-[#0EA5E9] text-white border border-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.35)] scale-105"
                            : "bg-[#0F172A]/80 border border-[#1E293B] text-[#94A3B8] hover:border-[#0EA5E9]/60 hover:text-[#F1F5F9] hover:bg-[#1E293B]/60"
                        }`}
                        aria-current={currentPage === page ? "page" : undefined}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#1E293B] disabled:hover:text-[#94A3B8] border-[#1E293B] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#F1F5F9] bg-[#0F172A]/80 backdrop-blur-md"
                  aria-label="Next page"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Results Summary for Single Page */}
          {totalPages <= 1 && filteredProjects.length > 0 && (
            <div className="mt-12 text-center text-sm text-[#94A3B8]">
              Showing all <span className="font-semibold text-[#F1F5F9]">{filteredProjects.length}</span> projects
            </div>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-[#6366F1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="glass-card p-12 text-center border border-[#0EA5E9]/20">
            <div className="shimmer-line mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg mb-8 max-w-2xl mx-auto">
              We are always ready to turn your ideas into reality through our expertise.
              Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="shimmer-line mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
