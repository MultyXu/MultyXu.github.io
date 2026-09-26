// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/cv.pdf";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-one-paper-submitted-and-is-under-review-satisfied",
          title: 'One paper submitted and is under review! :satisfied:',
          description: "",
          section: "News",},{id: "news-our-work-stein-variational-belief-propagation-for-multi-robot-coordination-is-accepted-to-ra-l-tada",
          title: 'Our work Stein Variational Belief Propagation for Multi-Robot Coordination is accepted to RA-L!...',
          description: "",
          section: "News",},{id: "news-our-work-single-view-3d-reconstruction-via-so-2-equivariant-gaussian-sculpting-networks-has-been-accepted-to-rss-workshop-on-geometric-and-algebraic-structure-in-robot-learning-tada",
          title: 'Our work Single-View 3D Reconstruction via SO(2)-Equivariant Gaussian Sculpting Networks has been accepted...',
          description: "",
          section: "News",},{id: "news-our-work-latent-bki-has-been-submitted-to-ra-l-for-review",
          title: 'Our work Latent BKI has been submitted to RA-L for review.',
          description: "",
          section: "News",},{id: "news-our-work-latent-bki-has-been-accpeted-by-ra-l",
          title: 'Our work Latent BKI has been accpeted by RA-L.',
          description: "",
          section: "News",},{id: "projects-single-view-3d-reconstruction",
          title: 'Single-View 3D Reconstruction',
          description: "Single-View 3D Reconstruction via SO(2)-Equivariant Gaussian Sculpting Networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GS_reconstruct/";
            },},{id: "projects-latent-bki",
          title: 'Latent BKI',
          description: "Open-Dictionary Continuous Mapping in Visual-Language Latent Spaces with Quantifiable Uncertainty",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LatentBKI/";
            },},{id: "projects-multi-robot-system",
          title: 'Multi-Robot System',
          description: "Stein Variational Belief Propagation for Multi-Robot Coordination",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SVBP/";
            },},{id: "projects-visual-slam-meets-inpainting",
          title: 'Visual-SLAM meets inpainting',
          description: "Evaluation on various SLAM algorithm and try extension with visual-SLAM with generative inpainting to remove dynamic objects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/UMDrive_course_proj/";
            },},{id: "projects-human-object-interaction-detection",
          title: 'Human-Object Interaction Detection',
          description: "Jointly detect (human, act, object) triplet with bounding boxes&#39; center point.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eecs442_final/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%68%78%75@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MultyXu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ruihan-xu-multy", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=f3s3EGUAAAAJ", "_blank");
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
