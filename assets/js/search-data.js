// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Books, edited volumes, journal and conference papers, in reversed chronological order within each category.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Invited talks, keynotes and tutorials, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Selected%20Invited%20Talks/";
          },
        },{id: "nav-academic-service",
          title: "Academic Service",
          description: "Professional activities and academic service roles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Services/";
          },
        },{id: "nav-grants",
          title: "Grants",
          description: "Research grants and funded projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Grants/";
          },
        },{id: "nav-students",
          title: "Students",
          description: "Members and alumni of Naijun Zhan&#39;s group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Students/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught by Naijun Zhan.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Teaching/";
          },
        },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Naijun-cv-2022.pdf", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/63/1911", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6A%7A%68%61%6E@%70%6B%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bd-XZkYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
