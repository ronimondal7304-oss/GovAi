/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="nav">
            <a href="#" className="brand">
              <img className="brand-mark" src="/logo.png" alt="GovAI.fm Logo" />
              <span className="brand-text">
                GovAI.fm
              </span>
            </a>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
              <a href="#about">About</a>
              <a href="#episodes">Episodes</a>
              <a href="#hosts">Hosts</a>
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

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">A podcast for public-sector AI leaders</span>
              <h1>AI in the Public Sector: <em>Behind the Scenes</em></h1>
              <p className="hero-sub">Join us as we explore the real stories behind AI in government services. No vendor pitches — just public servants and practitioners sharing what actually worked.</p>
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

            <a id="latest-episode" href="https://www.youtube.com/watch?v=i41bi-9hPXg" target="_blank" rel="noopener noreferrer" className="featured-episode" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <span className="featured-episode-label"><span className="live-dot"></span>Latest Episode</span>
              <div className="featured-episode-thumb" style={{ backgroundImage: 'url(https://img.youtube.com/vi/i41bi-9hPXg/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="play-button">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div className="featured-episode-meta">
                <span>EP 10</span>
                <span className="dot"></span><span>42 min</span>
                <span className="dot"></span><span>Latest</span>
              </div>
              <h3>Traditional Software Dev Is Dead: A Blueprint for What's Next</h3>
              <p className="featured-episode-guest">With Andre Kaminski &amp; Girish Limaye</p>
            </a>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip-content">
            <span className="trust-strip-label">Featured Guests Include</span>
            <div className="trust-guests">
              <span>Andre Kaminski</span>
              <span>Dr. Vered Shwartz</span>
              <span>Jawad Amin · Microsoft</span>
              <span>Hubert Duan</span>
              <span>Dr. Nan Xie</span>
              <span>Dr. Curtis Northcutt</span>
              <span>Aman Sidhu</span>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="section-mid">
        <div className="container">
          <div className="about-wrap">
            <div className="about-text">
              <span className="eyebrow">About the Podcast</span>
              <h2>The unfiltered conversations public-sector AI deserves.</h2>
              <p>Want to know how AI is actually being used to improve public services? Get a no-nonsense guide to real-world AI implementations. We tap into the unique openness of the public sector to share detailed strategies and lessons learned, accelerating AI adoption for the benefit of all.</p>
              <p>Join us to explore detailed strategies and lessons learned directly from those in the trenches of public sector AI innovation.</p>
              <div className="stat-grid">
                <div>
                  <div className="stat-num">10+</div><div className="stat-label">Episodes published</div>
                </div>
                <div>
                  <div className="stat-num">7+</div><div className="stat-label">Industry experts featured</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <svg viewBox="0 0 200 200" fill="none">
                <rect x="60" y="40" width="80" height="20" rx="2" stroke="#22D3EE" strokeWidth="1.5"/>
                <rect x="68" y="60" width="64" height="100" stroke="#22D3EE" strokeWidth="1.5"/>
                <line x1="78" y1="60" x2="78" y2="160" stroke="#22D3EE" strokeWidth="1"/>
                <line x1="100" y1="60" x2="100" y2="160" stroke="#22D3EE" strokeWidth="1.5"/>
                <line x1="122" y1="60" x2="122" y2="160" stroke="#22D3EE" strokeWidth="1"/>
                <rect x="56" y="160" width="88" height="14" rx="2" stroke="#22D3EE" strokeWidth="1.5"/>
                <circle cx="60" cy="40" r="4" fill="#22D3EE"/>
                <circle cx="100" cy="40" r="4" fill="#22D3EE"/>
                <circle cx="140" cy="40" r="4" fill="#22D3EE"/>
                <circle cx="60" cy="174" r="4" fill="#22D3EE"/>
                <circle cx="100" cy="174" r="4" fill="#22D3EE"/>
                <circle cx="140" cy="174" r="4" fill="#22D3EE"/>
                <line x1="60" y1="40" x2="40" y2="40" stroke="#22D3EE" strokeWidth="1" opacity="0.5"/>
                <line x1="140" y1="40" x2="160" y2="40" stroke="#22D3EE" strokeWidth="1" opacity="0.5"/>
                <line x1="60" y1="174" x2="40" y2="174" stroke="#22D3EE" strokeWidth="1" opacity="0.5"/>
                <line x1="140" y1="174" x2="160" y2="174" stroke="#22D3EE" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="episodes" className="section-darker">
        <div className="container">
          <div className="episodes-header">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Latest Episodes</span>
              <h2>Real conversations. Real implementations.</h2>
            </div>
          </div>

          <div className="episode-grid">
            <a href="https://www.youtube.com/watch?v=i41bi-9hPXg" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-1" style={{ backgroundImage: 'url(https://img.youtube.com/vi/i41bi-9hPXg/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 10</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>10</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>42 min</span></div><h3>Traditional Software Dev Is Dead: A Blueprint for What's Next</h3><div className="episode-guest"><span className="guest-dot"></span>With Andre Kaminski</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=pveBZhOoI84" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-2" style={{ backgroundImage: 'url(https://img.youtube.com/vi/pveBZhOoI84/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 09</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>09</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>38 min</span></div><h3>AI's Blind Spots: Cultural Bias, Hallucinations & What Leaders Must Know</h3><div className="episode-guest"><span className="guest-dot"></span>With Dr. Vered Shwartz</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=qF0KHYdyMWE" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-3" style={{ backgroundImage: 'url(https://img.youtube.com/vi/qF0KHYdyMWE/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 08</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>08</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>45 min</span></div><h3>The Next Era of AI Agents: What Leaders Must Know</h3><div className="episode-guest"><span className="guest-dot"></span>With Jawad Amin · Microsoft</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=YhbVvKoctsU" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-4" style={{ backgroundImage: 'url(https://img.youtube.com/vi/YhbVvKoctsU/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 07</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>07</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>40 min</span></div><h3>RAG Isn't a Silver Bullet — Making GenAI Reliable in the Real World</h3><div className="episode-guest"><span className="guest-dot"></span>With Hubert Duan</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=ZxcUFD1ofeo" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-5" style={{ backgroundImage: 'url(https://img.youtube.com/vi/ZxcUFD1ofeo/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 06</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>06</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>44 min</span></div><h3>Beyond DevOps: Building in the Age of AI</h3><div className="episode-guest"><span className="guest-dot"></span>With Andre Kaminski</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=-uyDu190JXY" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-6" style={{ backgroundImage: 'url(https://img.youtube.com/vi/-uyDu190JXY/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 05</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>05</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>39 min</span></div><h3>The Story of AI Part 2 — The Fifth Tribe Strikes Back</h3><div className="episode-guest"><span className="guest-dot"></span>With Aman Sidhu & Girish Limaye</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=2PorEY2yUrI" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-7" style={{ backgroundImage: 'url(https://img.youtube.com/vi/2PorEY2yUrI/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 04</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>04</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>41 min</span></div><h3>Rethinking Public Sector Innovation</h3><div className="episode-guest"><span className="guest-dot"></span>With Dr. Nan Xie</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=3im5q70hS8o" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-8" style={{ backgroundImage: 'url(https://img.youtube.com/vi/3im5q70hS8o/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 03</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>03</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>43 min</span></div><h3>Designing the Trust Layer for AI: A Conversation</h3><div className="episode-guest"><span className="guest-dot"></span>With Dr. Curtis Northcutt</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=cI106r0XSbA" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-9" style={{ backgroundImage: 'url(https://img.youtube.com/vi/cI106r0XSbA/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 02</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>02</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>48 min</span></div><h3>The Story of AI Part 1 — 60 Years, 5 Tribes</h3><div className="episode-guest"><span className="guest-dot"></span>With Aman Sidhu & Girish Limaye</div></div>
            </a>
            <a href="https://www.youtube.com/watch?v=vW17Ev9n5EA" target="_blank" rel="noopener noreferrer" className="episode-card">
              <div className="episode-thumb thumb-10" style={{ backgroundImage: 'url(https://img.youtube.com/vi/vW17Ev9n5EA/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="episode-num">EP 01</span><div className="episode-thumb-overlay" style={{ opacity: 0.1 }}>01</div><div className="episode-watch"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
              <div className="episode-body"><div className="episode-meta"><span>YouTube</span><span className="dot"></span><span>36 min</span></div><h3>GovAI.fm Kick-Off — Demystifying the AI Journey</h3><div className="episode-guest"><span className="guest-dot"></span>With Girish & Aman</div></div>
            </a>
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
                <img src="/girish.jpg" alt="Girish Limaye" className="host-avatar-img" />
              </div>
              <div>
                <h3>Girish Limaye</h3><div className="host-role">AI Strategy</div>
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
                <img src="/aman.jpg" alt="Aman Sidhu" className="host-avatar-img" />
              </div>
              <div>
                <h3>Aman Sidhu</h3><div className="host-role">Business &amp; Data</div>
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
                <img className="brand-mark" src="/logo.png" alt="GovAI.fm Logo" />
                <span className="brand-text">GovAI.fm</span>
              </a>
              <p>Real conversations about how AI is actually being used to improve public services — straight from the practitioners shipping it.</p>
            </div>
            <div className="footer-col"><h4>Podcast</h4><ul><li><a href="#about">About</a></li><li><a href="#episodes">Episodes</a></li><li><a href="#hosts">Hosts</a></li><li><a href="#topics">Topics</a></li></ul></div>
            <div className="footer-col"><h4>Listen</h4><ul><li><a href="https://youtube.com/@govai.fm-podcast?si=ElsC-eBFOu8bPG3M" target="_blank" rel="noopener noreferrer">YouTube</a></li><li><a href="https://podcasts.apple.com/us/podcast/govai-fm/id1895586834" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li><li><a href="https://open.spotify.com/show/6hvYMMXOtTk4w0790JUS3z?si=ECwlED5QRqeBh1U_arbNUQ" target="_blank" rel="noopener noreferrer">Spotify</a></li></ul></div>
            <div className="footer-col"><h4>Connect</h4><ul><li><a href="https://www.linkedin.com/in/girishlimaye?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="mailto:hello@govai.fm">Contact</a></li></ul></div>
          </div>
          <div className="footer-bottom">
            <div>© 2025 AI In The Public Sector. All rights reserved. &nbsp;·&nbsp; Audiovisual Support: Susma K. and Jaskaranbir</div>
            <div className="footer-socials">
              <a href="https://youtube.com/@govai.fm-podcast?si=ElsC-eBFOu8bPG3M" target="_blank" rel="noopener noreferrer" title="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a href="https://www.linkedin.com/in/girishlimaye?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
