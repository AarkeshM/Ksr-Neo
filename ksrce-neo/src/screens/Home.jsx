import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import KeyHighlight from '../components/KeyHighlight';
import ProgramCard from '../components/ProgramCard';
import ResourceCard from '../components/ResourceCard';
import EventCard from '../components/EventCard';
import Button from '../components/Button';

// Icon components
import WorkshopIcon from '../components/icons/WorkshopIcon';
import FileDocIcon from '../components/icons/FileDocIcon';
import UsersIcon from '../components/icons/UsersIcon';

const Home = () => {
  const programs = [
    {
      title: "Incubation Program",
      description: "A comprehensive program for early-stage startups, providing access to resources, mentorship, and funding opportunities.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGCbvu4w1iyMRtbxhiDRwN8CZQ8HI8FD18yUnEB-IhDi-P1aLzy-cxnGmITy9PKP7wmrN-VoXL5-1nm7iQvw3LomX2hgeCTEzrn5JlJe4y-qidKW4vovkLdC9lqVCPa1hsaAKjh1gpKPPUGqzNJ0dx1kwoEsPW35a9SHgvkXCuCurJt4QFbHstW5fBA09CKG3J9vYpx0TThzIzpKA2IHQ0eNzewbBKwWdzeBqsS86Kz_ZezcZU7YtZYH8cnv3BxRoE52B6dzl-CvsR"
    },
    {
      title: "Acceleration Program",
      description: "An intensive program designed to accelerate the growth of startups through workshops, networking, and investor connections.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcBrcxH0HKVvX9H0_TzzMwcIewyxGBkqjUN_NsPvWVjlUWFlZGcCB8HfMywB2wbxIz0aP8j-ch8dDbmozUTTR_rRIL-nI5m5CjLXzZvjxStdMPPE4uiFtnDlNFIKuogtIt0mjcYnFOBhjt4yGeIG-WQXzQXiGHYLs93sLtbshv557CUQXYSM0e7Skup0Sh_e23ugT-Ue9sZgViLabASbI5zf-YI8AOtb6Ex9Ppyc3MQQed-zH7pftMzChWt_Ob5ODT2iRdbC2N8dOY"
    },
    {
      title: "Mentorship Program",
      description: "Connect with experienced mentors who can provide guidance and support to help you navigate the challenges of building a successful startup.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_BKpxFv2N2Do0lyNvg9JPbPdbBH2FKBEslXHnaueKcxBGpSvp02ZsIyqRYQ08N79h1TMtoXNSB0XRXHSS2ywx85dC2jufv4nLFE5YdmyqDDtaIsGl9DlTIVeRB8yzbJYOcwE7nPizFtHUaLS6uIHzMlJr1PuBRmPxdMFZRe21fcm9hCJMW-gFB0KThKajRFzl1m27eLNjIYgMcxD-fLjM6iVuhuqbUWwwxpFMrCRff1yCNgcp0Z_lUBZkhhKCayY3uAZbJXe7FksF"
    }
  ];

  const resources = [
    { title: "Workshops", icon: <WorkshopIcon /> },
    { title: "Templates", icon: <FileDocIcon /> },
    { title: "Community", icon: <UsersIcon /> }
  ];

  return (
    <div className="root-container">
      <div className="layout-container">
        <Header />

        <div className="content-wrapper">
          <div className="layout-content-container">
            <Hero />

            <h2 className="section-title">Key Highlights</h2>
            <div className="highlights-container">
              <KeyHighlight title="Startups Incubated" value="50+" />
              <KeyHighlight title="Funding Raised" value="$10M+" />
              <KeyHighlight title="Jobs Created" value="200+" />
            </div>

            <h2 className="section-title">Our Programs</h2>
            <div className="programs-container">
              <div className="programs-inner">
                {programs.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
            </div>

            <h2 className="section-title">Upcoming Events</h2>
            <div className="p-4">
              <EventCard />
            </div>

            <h2 className="section-title">Resources</h2>
            <div className="resources-container">
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>

            <div className="cta-section">
              <div className="cta-content">
                <h1 className="cta-title">
                  Ready to Take Your Startup to the Next Level?
                </h1>
              </div>
              <div className="cta-button-container">
                <Button variant="primary" size="large" className="grow">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;