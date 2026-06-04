<template>
  <div class="moderncv-container">
    <header class="cv-header">
      <div class="cv-name-block">
        <h1 class="cv-name">{{ cvData.firstName }} <span class="cv-lastname">{{ cvData.lastName }}</span></h1>
        <h2 class="cv-title">{{ cvData.title }}</h2>
      </div>
      <div class="cv-contact-block">
        <div v-for="(line, index) in cvData.address" :key="index" class="contact-item">
          {{ line }}
        </div>
        <div class="contact-item email-container">
          <span v-if="formattedEmail">{{ formattedEmail }}</span>
          <span v-else>Contact loading...</span>
        </div>
      </div>
    </header>

    <section class="cv-section" v-for="(section, index) in cvData.sections" :key="index">
      <div class="section-header">
        <h3 class="section-title">{{ section.title }}</h3>
        <div class="section-line"></div>
      </div>

      <div class="section-content">
        <div class="cv-entry" v-for="(entry, eIndex) in section.entries" :key="eIndex">
          <div class="entry-left">
            <span class="entry-date">{{ entry.dateOrLabel }}</span>
          </div>
          <div class="entry-right">
            <div class="entry-main-header">
              <span class="entry-title" v-if="entry.title">{{ entry.title }}</span>
              <span class="entry-separator" v-if="entry.title && entry.subtitle">, </span>
              <span class="entry-subtitle" v-if="entry.subtitle">{{ entry.subtitle }}</span>
            </div>
            <div class="entry-description" v-if="entry.description" v-html="entry.description"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CVPage",
  data() {
    return {
      encodedEmail: "c291cmF2LmRhc0BpdWNhYS5pbg==",
      formattedEmail: null,
      cvData: {
        firstName: "Sourav",
        lastName: "Das",
        title: "Senior Research Fellow",
        address: [
          "Inter-University Centre for Astronomy and Astrophysics (IUCAA)",
          "Post Bag 4, Ganeshkhind, Pune 411007, India"
        ],
        sections: [
          {
            title: "Education",
            entries: [
              {
                dateOrLabel: "2023 - Present",
                title: "PhD (Cosmology and Astrophysics)",
                subtitle: "IUCAA, Pune",
                description: "Working with Prof. Surhud More. Title: <em>Probes of the Expansion history of the Universe</em>."
              },
              {
                dateOrLabel: "2021 - 2023",
                title: "M.Sc. Physics (Astrophysics)",
                subtitle: "Savitribai Phule Pune University",
                description: "Joint programme of SPPU and IUCAA."
              },
              {
                dateOrLabel: "2018 - 2021",
                title: "B.Sc. Physics (Hons)",
                subtitle: "University of Calcutta",
                description: "Graduated with Honors."
              }
            ]
          },
          {
            title: "Research & Experience",
            entries: [
              {
                dateOrLabel: "Current",
                title: "LIGO Scientific Collaboration (LSC)",
                subtitle: "O4b Cosmology Analysis",
                description: "Benchmarking k-correction schemes for galaxy catalogs (GLADE+) critical for accurate statistical host identification in dark siren cosmology."
              },
              {
                dateOrLabel: "Current",
                title: "Distance-Duality Relation",
                subtitle: "Cosmological Testing",
                description: "Testing the Etherington distance-duality relation using recent Supernovae (Pantheon/JLA) and BAO (DESI) datasets."
              },
              {
                dateOrLabel: "Aug 2025",
                title: "Technical Coordinator & Grader",
                subtitle: "IUCAA & IOAA",
                description: "Managed video recording for IUCAA Graduate School and served as an official grader for the International Olympiad for Astronomy and Astrophysics (Mumbai)."
              }
            ]
          },
          {
            title: "Publications",
            entries: [
              {
                dateOrLabel: "2026",
                title: "Das, S. & More, S.",
                subtitle: "Submitted",
                description: "<em>Cosmology-Independent Constraints on the Etherington Relation and SNela Absolute Magnitude Evolution from DESI-DR2</em> (arxiv:2604.02433)."
              },
              {
                dateOrLabel: "2026",
                title: "Dutta, S., Muzahid, S., Schaye, J., Johnson, S., Das, S., et al.",
                subtitle: "Submitted",
                description: "<em>MUSE-QuBES: Probing Anisotropies in Gas and Metal Distributions in the Circumgalactic Medium</em> (arxiv:2602.17593)."
              }
            ]
          },
          {
            title: "Outreach & Presentations",
            entries: [
              {
                dateOrLabel: "28 Feb 2026",
                title: "National Science Day Speaker",
                subtitle: "Public Science Talk",
                description: "<em>Summer is NOT when Earth is Closest to the Sun: The Science of Seasons and Solstices</em>."
              },
              {
                dateOrLabel: "28 Feb 2025",
                title: "National Science Day Speaker",
                subtitle: "Public Science Talk",
                description: "<em>How did we know that Earth revolves around the Sun?</em>"
              }
            ]
          },
          {
            title: "Skills",
            entries: [
              {
                dateOrLabel: "Computational",
                title: "Bayesian Inference",
                description: "MCMC / Nested Sampling for statistical frameworks in computational cosmology."
              },
              {
                dateOrLabel: "Languages",
                title: "Programming & Markup",
                description: "Python 3, FORTRAN, C, LaTeX, HTML/CSS."
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    // This executes purely in the browser, completely invisible to SSR scrapers
    const rawEmail = atob(this.encodedEmail);
    const [name, domain] = rawEmail.split('@');
    this.formattedEmail = `${name} [at] ${domain.replace(/\./g, ' [dot] ')}`;
  }
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/fonts.css');

.moderncv-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Computer Modern Serif", "Times New Roman", serif;
  color: #333;
  line-height: 1.5;
}

/* Header Styling */
.cv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
}

.cv-name {
  font-size: 2.8rem;
  font-weight: normal;
  margin: 0;
  color: #757575; /* moderncv grey */
}

.cv-lastname {
  font-weight: bold;
  color: #333;
}

.cv-title {
  font-size: 1.2rem;
  font-style: italic;
  color: #3e8ebf; /* moderncv blue */
  margin: 5px 0 0 0;
}

.cv-contact-block {
  text-align: right;
  font-size: 0.9rem;
  color: #555;
}

/* Section Styling */
.cv-section {
  margin-bottom: 30px;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.4rem;
  color: #3e8ebf;
  margin: 0;
  white-space: nowrap;
  padding-right: 15px;
  font-weight: normal;
}

.section-line {
  flex-grow: 1;
  height: 2px;
  background-color: #e0e0e0;
}

/* Entry Styling */
.cv-entry {
  display: flex;
  margin-bottom: 15px;
}

.entry-left {
  width: 150px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 20px;
}

.entry-date {
  font-size: 0.95rem;
  color: #757575;
  font-style: italic;
}

.entry-right {
  flex-grow: 1;
}

.entry-title {
  font-weight: bold;
  color: #333;
}

.entry-subtitle {
  font-style: italic;
  color: #555;
}

.entry-description {
  margin-top: 4px;
  font-size: 0.95rem;
  color: #444;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cv-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .cv-contact-block {
    text-align: left;
    margin-top: 20px;
  }

  .cv-entry {
    flex-direction: column;
  }

  .entry-left {
    width: 100%;
    text-align: left;
    padding-right: 0;
    margin-bottom: 5px;
  }

  .entry-date {
    font-weight: bold;
    font-style: normal;
    color: #3e8ebf;
  }
}
</style>
