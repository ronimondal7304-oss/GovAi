/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Radio } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const cardEl = trackRef.current.children[0] as HTMLElement;
    const itemWidth = cardEl ? cardEl.offsetWidth : 340;
    const gap = window.innerWidth >= 768 ? 20 : 20; // consistent gap
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    setActiveDot(Math.min(newIndex, 10)); // max 10 for 11 dots (0-10)
  };

  const scrollToEpisode = (index: number) => {
    if (!trackRef.current) return;
    const cardEl = trackRef.current.children[0] as HTMLElement;
    const itemWidth = cardEl ? cardEl.offsetWidth : 340;
    trackRef.current.scrollTo({ left: index * (itemWidth + 20), behavior: 'smooth' });
  };

  // Ensure scroll listener is added to the correct track
  // We can attach it directly to the div using onScroll

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    // don't set isDragging to false immediately so click handler can read it
    setTimeout(() => setIsDragging(false), 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    if (Math.abs(x - startX) > 5) {
      setIsDragging(true);
    }
    if (!isDragging) return;
    e.preventDefault();
    const walk = (x - startX) * 2; // scroll-fast
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>×</button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <header className="site-header">
        <div className="container">
          <div className="nav">
            <a href="#" className="brand">
              <img 
                className="brand-mark" 
                src="https://i.ibb.co/wh0fzktN/logo.png" 
                alt="GovAI.fm Logo"
              />
              <span className="brand-text">
                GovAI.fm
              </span>
            </a>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
              <a href="#about">About</a>
              <a href="#episodes">Episodes</a>
              <a href="#hosts">Hosts</a>
              <a href="#guests">Guests</a>
              <a href="#why">Why Tune In</a>
              <a href="#topics">Topics</a>
            </nav>
            <div className="nav-cta">
              <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">DECLUTTERING AI FOR THE PUBLIC SECTOR &amp; BEYOND</span>
              <h1>Conversations with AI leaders shaping real-world adoption</h1>
              <p className="hero-sub">Hear from the leaders, builders, and policymakers shaping how AI gets adopted — what’s actually working, what isn’t, and what comes next.</p>
              <div className="hero-ctas">
                <a href="#latest-episode" className="btn btn-primary btn-large">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  Listen to Latest Episode
                </a>
                <a href="#episodes" className="btn btn-secondary btn-large">Browse All Episodes</a>
              </div>
              <div className="listen-on">
                <span className="listen-on-label">Listen on</span>
                <div className="listen-on-row">
                  <a href="https://youtube.com/@govai.fm-podcast?si=ElsC-eBFOu8bPG3M" target="_blank" rel="noopener noreferrer" className="platform-btn" title="YouTube" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
                  <a href="https://podcasts.apple.com/us/podcast/govai-fm/id1895586834" target="_blank" rel="noopener noreferrer" className="platform-btn" title="Apple Podcasts" aria-label="Apple Podcasts"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-2.5 12a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3zM7 14.5a5 5 0 1 1 10 0v.5h-2v-.5a3 3 0 1 0-6 0v.5H7v-.5z"/></svg></a>
                  <a href="https://open.spotify.com/show/6hvYMMXOtTk4w0790JUS3z?si=ECwlED5QRqeBh1U_arbNUQ" target="_blank" rel="noopener noreferrer" className="platform-btn" title="Spotify" aria-label="Spotify"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12A12 12 0 0 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/></svg></a>
                  <a href="https://www.linkedin.com/in/girishlimaye?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="platform-btn" title="LinkedIn" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                </div>
              </div>
            </div>

            <div id="latest-episode-container" className="featured-episode-card">
              <div className="featured-episode-label-wrap">
                <span className="featured-episode-label"><span className="live-dot"></span>LATEST EPISODE</span>
              </div>

              <div className="featured-episode-media">
                <div
                  className="featured-episode-thumb"
                  style={{ backgroundImage: 'url(https://img.youtube.com/vi/Ek8ZkbOapBo/maxresdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer' }}
                  onClick={() => setActiveVideo('Ek8ZkbOapBo')}
                >
                  <div className="play-button-large">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>

              <div className="featured-episode-meta">
                <span>EP 11</span>
                <span className="dot">·</span><span>Latest</span>
              </div>
              <h3 className="featured-episode-title" style={{ fontFamily: '"Fraunces", serif' }}>Inside BC's Unfolding AI Story</h3>
              <p className="featured-episode-guest">With Hon. Rick Glumac</p>

              <div className="listen-on-box">
                <div className="listen-on-label">OR LISTEN ON <span className="listen-on-highlight">YOUR FAVORITE APP</span></div>
                <div className="app-buttons">
                  <a href="https://youtu.be/Ek8ZkbOapBo?si=s1cP_TJ7QYYIVTPM" target="_blank" rel="noopener noreferrer" className="app-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span>YouTube</span>
                  </a>
                  <a href="https://open.spotify.com/episode/4kTurw4jCdIFL5EttTBXq3?si=MY-ih26oSQaJL8KTKomHkg&t=0&pi=mdXTQTkSQvazo" target="_blank" rel="noopener noreferrer" className="app-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.14 4.32-1.32 9.72-.6 13.439 1.68.421.241.6.84.3 1.14zm.12-3.36C15.24 8.28 8.82 8.04 5.16 9.18c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.2-1.32 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.239.6-.959.78-1.559.42z"/></svg>
                    <span>Spotify</span>
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/inside-bcs-unfolding-ai-story-with-rick-glumac-bcs/id1895586834?i=1000763981747" target="_blank" rel="noopener noreferrer" className="app-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.013 19.387c-3.167 0-5.733-1.307-5.733-4.52V11.24c0-3.32 2.5-5.907 5.76-5.907 3.253 0 5.76 2.587 5.76 5.907v3.627c0 3.213-2.566 4.52-5.787 4.52zm0-11.893c-2.027 0-3.693 1.587-3.693 3.653v2.853c0 2.053 1.666 3.653 3.693 3.653 2.04 0 3.693-1.6 3.693-3.653v-2.853c0-2.066-1.653-3.653-3.693-3.653zm0 5.306c-.853 0-1.533-.666-1.533-1.506 0-.827.68-1.507 1.533-1.507.867 0 1.534.68 1.534 1.507 0 .84-.667 1.506-1.534 1.506z"/></svg>
                    <span>Apple</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guests" className="guests-section">
        <div className="guests-section-label">Featured Guests</div>
        <h2 className="guests-section-headline">Voices on the show</h2>
        <div className="guests-grid">
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/mVrpRJ4Y/rick.jpg" alt="Hon. Rick Glumac" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Hon. Rick Glumac</div>
              <div className="guest-company">Province of BC</div>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/rfdyWpJX/jawad.jpg" alt="Jawad Amin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Jawad Amin</div>
              <div className="guest-company">Microsoft</div>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/wN9JbzsN/vered.jpg" alt="Dr. Vered Shwartz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Dr. Vered Shwartz</div>
              <div className="guest-company">UBC</div>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/G4TmW5s9/curtis.png" alt="Dr. Curtis Northcutt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Dr. Curtis Northcutt</div>
              <div className="guest-company">Cleanlab</div>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/bjrFL7zk/andre.jpg" alt="Andre Kaminski" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Andre Kaminski</div>
              <div className="guest-company">WorkSafeBC</div>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/ZRFtkLKM/hubert.jpg" alt="Hubert Duan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Hubert Duan</div>
              <div className="guest-company">Microsoft</div>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-avatar">
              <img src="https://i.ibb.co/wZW3gsLt/nan-xie.jpg" alt="Dr. Nan Xie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="guest-info">
              <div className="guest-name">Dr. Nan Xie</div>
              <div className="guest-company">City of Calgary</div>
            </div>
          </div>
        </div>
      </section>

      <section id="episodes" className="section-darker">
        <div className="container">
          <div className="episodes-header">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2>Real conversations. Real implementations.</h2>
            </div>
            <div className="section-sub">
              <div className="dash"></div>
              Latest Episodes
              <span className="count">11 episodes</span>
            </div>
          </div>

          <div className="carousel-wrap">
            <button className="side-nav left" onClick={() => trackRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}>
              <svg viewBox="0 0 24 24"><path d="M15.5 4L8 12l7.5 8 1.5-1.4L11 12l6-6.6z"/></svg>
            </button>
            <button className="side-nav right" onClick={() => trackRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}>
              <svg viewBox="0 0 24 24"><path d="M8.5 4L16 12l-7.5 8L7 18.6 13 12 7 5.4z"/></svg>
            </button>
            <div className="edge-fade left"></div>
            <div className="edge-fade right"></div>

            <div 
              className="opt1-track" 
              ref={trackRef} 
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{ cursor: isMouseDown ? 'grabbing' : 'grab' }}
            >
              <div onClick={() => !isDragging && setActiveVideo('Ek8ZkbOapBo')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/Ek8ZkbOapBo/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 11</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">
                    <span className="latest">EP 11</span><span className="dot">·</span><span className="latest">Latest</span>
                  </div>
                  <h3>Inside BC's Unfolding AI Story</h3>
                  <div className="with">With Hon. Rick Glumac</div>
                </div>
              </div>
              
              <div onClick={() => !isDragging && setActiveVideo('i41bi-9hPXg')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/i41bi-9hPXg/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 10</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 10</div>
                  <h3>Traditional Software Dev Is Dead: A Blueprint for What's Next</h3>
                  <div className="with">With Andre Kaminski</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('pveBZhOoI84')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/pveBZhOoI84/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 09</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 09</div>
                  <h3>AI's Blind Spots: Cultural Bias, Hallucinations & What Leaders Must Know</h3>
                  <div className="with">With Dr. Vered Shwartz</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('qF0KHYdyMWE')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/qF0KHYdyMWE/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 08</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 08</div>
                  <h3>The Next Era of AI Agents: What Leaders Must Know</h3>
                  <div className="with">With Jawad Amin · Microsoft</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('YhbVvKoctsU')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/YhbVvKoctsU/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 07</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 07</div>
                  <h3>RAG Isn't a Silver Bullet — Making GenAI Reliable in the Real World</h3>
                  <div className="with">With Hubert Duan</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('ZxcUFD1ofeo')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/ZxcUFD1ofeo/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 06</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 06</div>
                  <h3>Beyond DevOps: Building in the Age of AI</h3>
                  <div className="with">With Andre Kaminski</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('-uyDu190JXY')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/-uyDu190JXY/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 05</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 05</div>
                  <h3>The Story of AI Part 2 — The Fifth Tribe Strikes Back</h3>
                  <div className="with">With Aman Sidhu & Girish Limaye</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('2PorEY2yUrI')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/2PorEY2yUrI/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 04</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 04</div>
                  <h3>Rethinking Public Sector Innovation</h3>
                  <div className="with">With Dr. Nan Xie</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('3im5q70hS8o')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/3im5q70hS8o/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 03</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 03</div>
                  <h3>Designing the Trust Layer for AI: A Conversation</h3>
                  <div className="with">With Dr. Curtis Northcutt</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('cI106r0XSbA')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/cI106r0XSbA/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 02</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 02</div>
                  <h3>The Story of AI Part 1 — 60 Years, 5 Tribes</h3>
                  <div className="with">With Aman Sidhu & Girish Limaye</div>
                </div>
              </div>

              <div onClick={() => !isDragging && setActiveVideo('vW17Ev9n5EA')} className="opt1-card" style={{ cursor: 'pointer' }}>
                <div className="thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/vW17Ev9n5EA/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="thumb-content">
                    <div className="ep-tag">EP 01</div>
                  </div>
                  <div className="play-mini"></div>
                </div>
                <div className="info">
                  <div className="meta">EP 01</div>
                  <h3>GovAI.fm Kick-Off — Demystifying the AI Journey</h3>
                  <div className="with">With Girish & Aman</div>
                </div>
              </div>
            </div>
          </div>

          <div className="dots-row">
            {Array.from({ length: 11 }).map((_, idx) => (
              <div 
                key={idx} 
                className={`dot ${activeDot === idx ? 'active' : ''}`}
                onClick={() => scrollToEpisode(idx)}
              ></div>
            ))}
          </div>

          <div className="drag-hint">
            <span className="arrow">←</span>
            Drag or use arrows to explore
            <span className="arrow">→</span>
          </div>
        </div>
      </section>

      <section id="hosts" className="section-mid">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Meet Your Hosts</span>
            <h2>Experience meets expertise.</h2>
            <p className="section-lead">Our hosts bring unparalleled insight into the unique challenges and triumphs of public sector AI, with a mission to foster collaboration and knowledge sharing across the field.</p>
          </div>
          <div className="hosts-grid">
            <div className="host-card">
              <div className="host-avatar">
                <img 
                  src="https://i.ibb.co/WpVdZXdx/girish.jpg" 
                  alt="Girish Limaye" 
                  className="host-avatar-img" 
                />
              </div>
              <div>
                <h3>Girish Limaye</h3>
                <p className="host-bio">A seasoned AI consultant who lives and breathes AI strategy.</p>
                <div className="host-links">
                  <a href="https://www.linkedin.com/in/girishlimaye/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="host-card">
              <div className="host-avatar">
                <img 
                  src="https://i.ibb.co/jkKwQYNh/aman.jpg" 
                  alt="Aman Sidhu" 
                  className="host-avatar-img" 
                />
              </div>
              <div>
                <h3>Aman Sidhu</h3>
                <p className="host-bio">A renowned business and data thought leader who understands the big picture.</p>
                <div className="host-links">
                  <a href="https://www.linkedin.com/in/sidhua/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section-darker">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Tune In</span>
            <h2>Substance, not soundbites.</h2>
            <p className="section-lead">Built for leaders who need real signal in the AI noise — the people, perspectives, and stories that move public-sector AI forward.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <h3>Hosts in the Trenches</h3><p>Practitioners who have shipped AI in regulated environments — not analysts speculating from the sidelines.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
              <h3>Detailed Discussions</h3><p>Long-form conversations that go deeper than vendor case studies — the trade-offs, the missteps, what they'd do differently.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
              <h3>No Jargon, Just Substance</h3><p>Plain-English insights leaders can actually apply — translated for both technical and non-technical audiences.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
              <h3>Real-World Topics</h3><p>The conversations actually happening in agencies and ministries today — adoption, governance, ethics, citizen impact.</p>
            </div>
          </div>
          <div className="audience-grid">
            <div className="audience-item"><h4>Business Leaders</h4><p>For leaders who need a clear view of AI to drive informed strategic decisions and bold compliance.</p></div>
            <div className="audience-item"><h4>Technical Leaders</h4><p>For engineering and architecture leaders shaping how their organizations build, deploy, and govern AI.</p></div>
            <div className="audience-item"><h4>Actionable Insights</h4><p>Get key from complex challenges and translate cutting-edge AI into practical, actionable insight.</p></div>
            <div className="audience-item"><h4>Real-World Topics</h4><p>Discussing the most relevant AI topics for public servants, leaders, and citizens shaping the future.</p></div>
          </div>
        </div>
      </section>

      <section id="topics" className="section-mid">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Hot Topics We Cover</span>
            <h2>The conversations that actually move public-sector AI forward.</h2>
          </div>
          <div className="topics-wrap">
            <span className="topic-pill">Ethical AI</span><span className="topic-pill">AI and Automation: Transforming Workflows</span>
            <span className="topic-pill">Driving stakeholder AI buy-in</span><span className="topic-pill">Steps to gain stakeholder approval</span>
            <span className="topic-pill">Addressing AI's shortcomings</span><span className="topic-pill">Building AI that serves citizens' needs</span>
          </div>
        </div>
      </section>



      <section className="bottom-cta">
        <div className="bottom-cta-content">
          <span className="eyebrow">Ready to listen?</span>
          <h2>Tune in, take notes, and revolutionize your approach to AI in the public sector.</h2>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <a href="#episodes" className="btn btn-primary btn-large"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Start Listening</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="brand">
                <img 
                  className="brand-mark" 
                  src="https://i.ibb.co/wh0fzktN/logo.png" 
                  alt="GovAI.fm Logo" 
                />
                <span className="brand-text">GovAI.fm</span>
              </a>
              <p>Real conversations about how AI is actually being used to improve public services — straight from the practitioners shipping it.</p>
            </div>
            <div className="footer-col"><h4>Podcast</h4><ul><li><a href="#about">About</a></li><li><a href="#episodes">Episodes</a></li><li><a href="#hosts">Hosts</a></li><li><a href="#guests">Guests</a></li><li><a href="#topics">Topics</a></li></ul></div>
            <div className="footer-col"><h4>Listen</h4><ul><li><a href="https://youtube.com/@govai.fm-podcast?si=ElsC-eBFOu8bPG3M" target="_blank" rel="noopener noreferrer">YouTube</a></li><li><a href="https://podcasts.apple.com/us/podcast/govai-fm/id1895586834" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li><li><a href="https://open.spotify.com/show/6hvYMMXOtTk4w0790JUS3z?si=ECwlED5QRqeBh1U_arbNUQ" target="_blank" rel="noopener noreferrer">Spotify</a></li></ul></div>
            <div className="footer-col"><h4>Connect</h4><ul><li><a href="https://www.linkedin.com/in/girishlimaye?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="mailto:girish@govai.fm">Contact</a></li></ul></div>
          </div>
          <div className="footer-bottom">
            <div>© 2025 AI In The Public Sector. All rights reserved.</div>
            <div className="footer-socials">
              <a href="https://youtube.com/@govai.fm-podcast?si=ElsC-eBFOu8bPG3M" target="_blank" rel="noopener noreferrer" title="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a href="https://www.linkedin.com/in/girishlimaye?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg></a>
              <a href="mailto:girish@govai.fm" title="Email"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
