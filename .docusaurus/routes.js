import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'aef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0f1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '95b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c3b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e1a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '840'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '547'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f2e'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/absurdism',
            component: ComponentCreator('/docs/tags/absurdism', 'aa6'),
            exact: true
          },
          {
            path: '/docs/tags/activities',
            component: ComponentCreator('/docs/tags/activities', '6c2'),
            exact: true
          },
          {
            path: '/docs/tags/advertising',
            component: ComponentCreator('/docs/tags/advertising', '08f'),
            exact: true
          },
          {
            path: '/docs/tags/agile',
            component: ComponentCreator('/docs/tags/agile', 'b71'),
            exact: true
          },
          {
            path: '/docs/tags/agriculture',
            component: ComponentCreator('/docs/tags/agriculture', '8b8'),
            exact: true
          },
          {
            path: '/docs/tags/ai',
            component: ComponentCreator('/docs/tags/ai', '91c'),
            exact: true
          },
          {
            path: '/docs/tags/alcohol',
            component: ComponentCreator('/docs/tags/alcohol', 'be2'),
            exact: true
          },
          {
            path: '/docs/tags/alfred',
            component: ComponentCreator('/docs/tags/alfred', '349'),
            exact: true
          },
          {
            path: '/docs/tags/alfred-workflow',
            component: ComponentCreator('/docs/tags/alfred-workflow', 'e67'),
            exact: true
          },
          {
            path: '/docs/tags/amazon',
            component: ComponentCreator('/docs/tags/amazon', 'c29'),
            exact: true
          },
          {
            path: '/docs/tags/american-history',
            component: ComponentCreator('/docs/tags/american-history', '18f'),
            exact: true
          },
          {
            path: '/docs/tags/american-revolution',
            component: ComponentCreator('/docs/tags/american-revolution', 'bcf'),
            exact: true
          },
          {
            path: '/docs/tags/analytics',
            component: ComponentCreator('/docs/tags/analytics', 'cc6'),
            exact: true
          },
          {
            path: '/docs/tags/animals',
            component: ComponentCreator('/docs/tags/animals', '468'),
            exact: true
          },
          {
            path: '/docs/tags/anti-fragile',
            component: ComponentCreator('/docs/tags/anti-fragile', '95b'),
            exact: true
          },
          {
            path: '/docs/tags/apartheid',
            component: ComponentCreator('/docs/tags/apartheid', '7bd'),
            exact: true
          },
          {
            path: '/docs/tags/api',
            component: ComponentCreator('/docs/tags/api', '38c'),
            exact: true
          },
          {
            path: '/docs/tags/app-development',
            component: ComponentCreator('/docs/tags/app-development', 'ce4'),
            exact: true
          },
          {
            path: '/docs/tags/apps',
            component: ComponentCreator('/docs/tags/apps', 'abe'),
            exact: true
          },
          {
            path: '/docs/tags/article',
            component: ComponentCreator('/docs/tags/article', 'f2f'),
            exact: true
          },
          {
            path: '/docs/tags/atheism',
            component: ComponentCreator('/docs/tags/atheism', '391'),
            exact: true
          },
          {
            path: '/docs/tags/autobiography',
            component: ComponentCreator('/docs/tags/autobiography', '784'),
            exact: true
          },
          {
            path: '/docs/tags/automation',
            component: ComponentCreator('/docs/tags/automation', 'f18'),
            exact: true
          },
          {
            path: '/docs/tags/aws',
            component: ComponentCreator('/docs/tags/aws', '856'),
            exact: true
          },
          {
            path: '/docs/tags/azure',
            component: ComponentCreator('/docs/tags/azure', 'dc9'),
            exact: true
          },
          {
            path: '/docs/tags/backend',
            component: ComponentCreator('/docs/tags/backend', '908'),
            exact: true
          },
          {
            path: '/docs/tags/baking',
            component: ComponentCreator('/docs/tags/baking', 'cc4'),
            exact: true
          },
          {
            path: '/docs/tags/bayesian',
            component: ComponentCreator('/docs/tags/bayesian', 'a24'),
            exact: true
          },
          {
            path: '/docs/tags/behavioural-economics',
            component: ComponentCreator('/docs/tags/behavioural-economics', 'd45'),
            exact: true
          },
          {
            path: '/docs/tags/bezos',
            component: ComponentCreator('/docs/tags/bezos', 'c5e'),
            exact: true
          },
          {
            path: '/docs/tags/biography',
            component: ComponentCreator('/docs/tags/biography', 'fbb'),
            exact: true
          },
          {
            path: '/docs/tags/biology',
            component: ComponentCreator('/docs/tags/biology', '438'),
            exact: true
          },
          {
            path: '/docs/tags/black-swan',
            component: ComponentCreator('/docs/tags/black-swan', '6ca'),
            exact: true
          },
          {
            path: '/docs/tags/blog',
            component: ComponentCreator('/docs/tags/blog', '63a'),
            exact: true
          },
          {
            path: '/docs/tags/body',
            component: ComponentCreator('/docs/tags/body', '082'),
            exact: true
          },
          {
            path: '/docs/tags/book-list',
            component: ComponentCreator('/docs/tags/book-list', '411'),
            exact: true
          },
          {
            path: '/docs/tags/book-review',
            component: ComponentCreator('/docs/tags/book-review', '1b4'),
            exact: true
          },
          {
            path: '/docs/tags/books',
            component: ComponentCreator('/docs/tags/books', 'e10'),
            exact: true
          },
          {
            path: '/docs/tags/brain',
            component: ComponentCreator('/docs/tags/brain', '5db'),
            exact: true
          },
          {
            path: '/docs/tags/bread',
            component: ComponentCreator('/docs/tags/bread', '8f2'),
            exact: true
          },
          {
            path: '/docs/tags/breathing',
            component: ComponentCreator('/docs/tags/breathing', '8a6'),
            exact: true
          },
          {
            path: '/docs/tags/business',
            component: ComponentCreator('/docs/tags/business', '112'),
            exact: true
          },
          {
            path: '/docs/tags/calling-bullshit',
            component: ComponentCreator('/docs/tags/calling-bullshit', 'a36'),
            exact: true
          },
          {
            path: '/docs/tags/capitalism',
            component: ComponentCreator('/docs/tags/capitalism', '814'),
            exact: true
          },
          {
            path: '/docs/tags/career',
            component: ComponentCreator('/docs/tags/career', 'fd6'),
            exact: true
          },
          {
            path: '/docs/tags/chaos',
            component: ComponentCreator('/docs/tags/chaos', '02d'),
            exact: true
          },
          {
            path: '/docs/tags/cheap-food',
            component: ComponentCreator('/docs/tags/cheap-food', '07d'),
            exact: true
          },
          {
            path: '/docs/tags/chicken',
            component: ComponentCreator('/docs/tags/chicken', '085'),
            exact: true
          },
          {
            path: '/docs/tags/ci-cd',
            component: ComponentCreator('/docs/tags/ci-cd', '56c'),
            exact: true
          },
          {
            path: '/docs/tags/classical-music',
            component: ComponentCreator('/docs/tags/classical-music', '307'),
            exact: true
          },
          {
            path: '/docs/tags/classics',
            component: ComponentCreator('/docs/tags/classics', '1d0'),
            exact: true
          },
          {
            path: '/docs/tags/clean-code',
            component: ComponentCreator('/docs/tags/clean-code', '36a'),
            exact: true
          },
          {
            path: '/docs/tags/cli',
            component: ComponentCreator('/docs/tags/cli', '37d'),
            exact: true
          },
          {
            path: '/docs/tags/climate-crisis',
            component: ComponentCreator('/docs/tags/climate-crisis', '308'),
            exact: true
          },
          {
            path: '/docs/tags/cliud',
            component: ComponentCreator('/docs/tags/cliud', 'b29'),
            exact: true
          },
          {
            path: '/docs/tags/cloud',
            component: ComponentCreator('/docs/tags/cloud', 'b07'),
            exact: true
          },
          {
            path: '/docs/tags/code-scanning',
            component: ComponentCreator('/docs/tags/code-scanning', 'dc3'),
            exact: true
          },
          {
            path: '/docs/tags/cognitive-biases',
            component: ComponentCreator('/docs/tags/cognitive-biases', '8c3'),
            exact: true
          },
          {
            path: '/docs/tags/cold-showers',
            component: ComponentCreator('/docs/tags/cold-showers', '42a'),
            exact: true
          },
          {
            path: '/docs/tags/communication',
            component: ComponentCreator('/docs/tags/communication', '65f'),
            exact: true
          },
          {
            path: '/docs/tags/communism',
            component: ComponentCreator('/docs/tags/communism', 'dd9'),
            exact: true
          },
          {
            path: '/docs/tags/computer-science',
            component: ComponentCreator('/docs/tags/computer-science', '212'),
            exact: true
          },
          {
            path: '/docs/tags/computer-vision',
            component: ComponentCreator('/docs/tags/computer-vision', '8c2'),
            exact: true
          },
          {
            path: '/docs/tags/computers',
            component: ComponentCreator('/docs/tags/computers', '400'),
            exact: true
          },
          {
            path: '/docs/tags/concentration',
            component: ComponentCreator('/docs/tags/concentration', 'bd7'),
            exact: true
          },
          {
            path: '/docs/tags/containers',
            component: ComponentCreator('/docs/tags/containers', '1e6'),
            exact: true
          },
          {
            path: '/docs/tags/contrarianism',
            component: ComponentCreator('/docs/tags/contrarianism', '886'),
            exact: true
          },
          {
            path: '/docs/tags/conway',
            component: ComponentCreator('/docs/tags/conway', 'f6a'),
            exact: true
          },
          {
            path: '/docs/tags/cooking',
            component: ComponentCreator('/docs/tags/cooking', '8ed'),
            exact: true
          },
          {
            path: '/docs/tags/courses',
            component: ComponentCreator('/docs/tags/courses', '674'),
            exact: true
          },
          {
            path: '/docs/tags/crime-series',
            component: ComponentCreator('/docs/tags/crime-series', '5de'),
            exact: true
          },
          {
            path: '/docs/tags/cyber-security',
            component: ComponentCreator('/docs/tags/cyber-security', '302'),
            exact: true
          },
          {
            path: '/docs/tags/dart',
            component: ComponentCreator('/docs/tags/dart', 'd54'),
            exact: true
          },
          {
            path: '/docs/tags/data',
            component: ComponentCreator('/docs/tags/data', '9a1'),
            exact: true
          },
          {
            path: '/docs/tags/data-data-drift',
            component: ComponentCreator('/docs/tags/data-data-drift', 'b6b'),
            exact: true
          },
          {
            path: '/docs/tags/data-data-management',
            component: ComponentCreator('/docs/tags/data-data-management', 'd19'),
            exact: true
          },
          {
            path: '/docs/tags/data-drift',
            component: ComponentCreator('/docs/tags/data-drift', '659'),
            exact: true
          },
          {
            path: '/docs/tags/data-engineering',
            component: ComponentCreator('/docs/tags/data-engineering', '7bf'),
            exact: true
          },
          {
            path: '/docs/tags/data-science',
            component: ComponentCreator('/docs/tags/data-science', '179'),
            exact: true
          },
          {
            path: '/docs/tags/data-strategy',
            component: ComponentCreator('/docs/tags/data-strategy', '4db'),
            exact: true
          },
          {
            path: '/docs/tags/data-warehouse',
            component: ComponentCreator('/docs/tags/data-warehouse', 'eb9'),
            exact: true
          },
          {
            path: '/docs/tags/database',
            component: ComponentCreator('/docs/tags/database', '7e4'),
            exact: true
          },
          {
            path: '/docs/tags/database-relational-database',
            component: ComponentCreator('/docs/tags/database-relational-database', '64c'),
            exact: true
          },
          {
            path: '/docs/tags/database-sql',
            component: ComponentCreator('/docs/tags/database-sql', '94a'),
            exact: true
          },
          {
            path: '/docs/tags/dataview',
            component: ComponentCreator('/docs/tags/dataview', 'd2f'),
            exact: true
          },
          {
            path: '/docs/tags/dating',
            component: ComponentCreator('/docs/tags/dating', 'b8c'),
            exact: true
          },
          {
            path: '/docs/tags/dating-apps',
            component: ComponentCreator('/docs/tags/dating-apps', '309'),
            exact: true
          },
          {
            path: '/docs/tags/debate',
            component: ComponentCreator('/docs/tags/debate', 'bf5'),
            exact: true
          },
          {
            path: '/docs/tags/decision-making',
            component: ComponentCreator('/docs/tags/decision-making', '8e4'),
            exact: true
          },
          {
            path: '/docs/tags/decison',
            component: ComponentCreator('/docs/tags/decison', 'be5'),
            exact: true
          },
          {
            path: '/docs/tags/deep-work',
            component: ComponentCreator('/docs/tags/deep-work', '2a7'),
            exact: true
          },
          {
            path: '/docs/tags/denim-philosophy',
            component: ComponentCreator('/docs/tags/denim-philosophy', '8a9'),
            exact: true
          },
          {
            path: '/docs/tags/design',
            component: ComponentCreator('/docs/tags/design', '43c'),
            exact: true
          },
          {
            path: '/docs/tags/design-patterns',
            component: ComponentCreator('/docs/tags/design-patterns', '79e'),
            exact: true
          },
          {
            path: '/docs/tags/design-sprint',
            component: ComponentCreator('/docs/tags/design-sprint', 'adb'),
            exact: true
          },
          {
            path: '/docs/tags/design-thinking',
            component: ComponentCreator('/docs/tags/design-thinking', 'e17'),
            exact: true
          },
          {
            path: '/docs/tags/development',
            component: ComponentCreator('/docs/tags/development', '181'),
            exact: true
          },
          {
            path: '/docs/tags/devops',
            component: ComponentCreator('/docs/tags/devops', '4ec'),
            exact: true
          },
          {
            path: '/docs/tags/dictionary',
            component: ComponentCreator('/docs/tags/dictionary', 'db8'),
            exact: true
          },
          {
            path: '/docs/tags/diet',
            component: ComponentCreator('/docs/tags/diet', '3a2'),
            exact: true
          },
          {
            path: '/docs/tags/digital-garden',
            component: ComponentCreator('/docs/tags/digital-garden', 'f61'),
            exact: true
          },
          {
            path: '/docs/tags/digital-nomad',
            component: ComponentCreator('/docs/tags/digital-nomad', 'ac9'),
            exact: true
          },
          {
            path: '/docs/tags/distractions',
            component: ComponentCreator('/docs/tags/distractions', '7de'),
            exact: true
          },
          {
            path: '/docs/tags/drama',
            component: ComponentCreator('/docs/tags/drama', '94d'),
            exact: true
          },
          {
            path: '/docs/tags/drinks',
            component: ComponentCreator('/docs/tags/drinks', '794'),
            exact: true
          },
          {
            path: '/docs/tags/drinks-non-alcoholic',
            component: ComponentCreator('/docs/tags/drinks-non-alcoholic', '4f5'),
            exact: true
          },
          {
            path: '/docs/tags/drugs',
            component: ComponentCreator('/docs/tags/drugs', 'b00'),
            exact: true
          },
          {
            path: '/docs/tags/dystopia',
            component: ComponentCreator('/docs/tags/dystopia', '871'),
            exact: true
          },
          {
            path: '/docs/tags/economics',
            component: ComponentCreator('/docs/tags/economics', '80f'),
            exact: true
          },
          {
            path: '/docs/tags/embedding',
            component: ComponentCreator('/docs/tags/embedding', 'cc7'),
            exact: true
          },
          {
            path: '/docs/tags/encoding',
            component: ComponentCreator('/docs/tags/encoding', '307'),
            exact: true
          },
          {
            path: '/docs/tags/endurance',
            component: ComponentCreator('/docs/tags/endurance', '4ef'),
            exact: true
          },
          {
            path: '/docs/tags/energy',
            component: ComponentCreator('/docs/tags/energy', 'c90'),
            exact: true
          },
          {
            path: '/docs/tags/engineering',
            component: ComponentCreator('/docs/tags/engineering', '8a5'),
            exact: true
          },
          {
            path: '/docs/tags/engineering-management',
            component: ComponentCreator('/docs/tags/engineering-management', '279'),
            exact: true
          },
          {
            path: '/docs/tags/english-language',
            component: ComponentCreator('/docs/tags/english-language', '918'),
            exact: true
          },
          {
            path: '/docs/tags/enterprise-data-warehouse',
            component: ComponentCreator('/docs/tags/enterprise-data-warehouse', '041'),
            exact: true
          },
          {
            path: '/docs/tags/entertainment',
            component: ComponentCreator('/docs/tags/entertainment', '8a4'),
            exact: true
          },
          {
            path: '/docs/tags/entropy',
            component: ComponentCreator('/docs/tags/entropy', '34a'),
            exact: true
          },
          {
            path: '/docs/tags/environmentalism',
            component: ComponentCreator('/docs/tags/environmentalism', '998'),
            exact: true
          },
          {
            path: '/docs/tags/equipment',
            component: ComponentCreator('/docs/tags/equipment', '326'),
            exact: true
          },
          {
            path: '/docs/tags/espionage',
            component: ComponentCreator('/docs/tags/espionage', '2b6'),
            exact: true
          },
          {
            path: '/docs/tags/etl',
            component: ComponentCreator('/docs/tags/etl', 'e7e'),
            exact: true
          },
          {
            path: '/docs/tags/evolution',
            component: ComponentCreator('/docs/tags/evolution', 'f38'),
            exact: true
          },
          {
            path: '/docs/tags/exercise',
            component: ComponentCreator('/docs/tags/exercise', 'c0e'),
            exact: true
          },
          {
            path: '/docs/tags/exploration',
            component: ComponentCreator('/docs/tags/exploration', '828'),
            exact: true
          },
          {
            path: '/docs/tags/extensialism',
            component: ComponentCreator('/docs/tags/extensialism', '370'),
            exact: true
          },
          {
            path: '/docs/tags/facism',
            component: ComponentCreator('/docs/tags/facism', '3c3'),
            exact: true
          },
          {
            path: '/docs/tags/famine',
            component: ComponentCreator('/docs/tags/famine', '9c9'),
            exact: true
          },
          {
            path: '/docs/tags/fantasy',
            component: ComponentCreator('/docs/tags/fantasy', '0a5'),
            exact: true
          },
          {
            path: '/docs/tags/fast-api',
            component: ComponentCreator('/docs/tags/fast-api', '9f1'),
            exact: true
          },
          {
            path: '/docs/tags/favorite-recipe',
            component: ComponentCreator('/docs/tags/favorite-recipe', '019'),
            exact: true
          },
          {
            path: '/docs/tags/feast-meal',
            component: ComponentCreator('/docs/tags/feast-meal', 'beb'),
            exact: true
          },
          {
            path: '/docs/tags/feature-engineering',
            component: ComponentCreator('/docs/tags/feature-engineering', '9b3'),
            exact: true
          },
          {
            path: '/docs/tags/fiction',
            component: ComponentCreator('/docs/tags/fiction', 'd5d'),
            exact: true
          },
          {
            path: '/docs/tags/finance',
            component: ComponentCreator('/docs/tags/finance', 'b93'),
            exact: true
          },
          {
            path: '/docs/tags/firebase',
            component: ComponentCreator('/docs/tags/firebase', 'a4c'),
            exact: true
          },
          {
            path: '/docs/tags/flexibility',
            component: ComponentCreator('/docs/tags/flexibility', 'ca3'),
            exact: true
          },
          {
            path: '/docs/tags/flutter',
            component: ComponentCreator('/docs/tags/flutter', 'dff'),
            exact: true
          },
          {
            path: '/docs/tags/focus',
            component: ComponentCreator('/docs/tags/focus', '9d5'),
            exact: true
          },
          {
            path: '/docs/tags/food',
            component: ComponentCreator('/docs/tags/food', '449'),
            exact: true
          },
          {
            path: '/docs/tags/food-prep',
            component: ComponentCreator('/docs/tags/food-prep', 'ed3'),
            exact: true
          },
          {
            path: '/docs/tags/front-end',
            component: ComponentCreator('/docs/tags/front-end', 'b53'),
            exact: true
          },
          {
            path: '/docs/tags/game-theory',
            component: ComponentCreator('/docs/tags/game-theory', 'b9a'),
            exact: true
          },
          {
            path: '/docs/tags/gcp',
            component: ComponentCreator('/docs/tags/gcp', '79f'),
            exact: true
          },
          {
            path: '/docs/tags/git',
            component: ComponentCreator('/docs/tags/git', '994'),
            exact: true
          },
          {
            path: '/docs/tags/github',
            component: ComponentCreator('/docs/tags/github', '326'),
            exact: true
          },
          {
            path: '/docs/tags/github-actions',
            component: ComponentCreator('/docs/tags/github-actions', '557'),
            exact: true
          },
          {
            path: '/docs/tags/github-reusable-workflows',
            component: ComponentCreator('/docs/tags/github-reusable-workflows', '6dd'),
            exact: true
          },
          {
            path: '/docs/tags/goku',
            component: ComponentCreator('/docs/tags/goku', '684'),
            exact: true
          },
          {
            path: '/docs/tags/gpt',
            component: ComponentCreator('/docs/tags/gpt', '087'),
            exact: true
          },
          {
            path: '/docs/tags/great-world-war',
            component: ComponentCreator('/docs/tags/great-world-war', 'bf1'),
            exact: true
          },
          {
            path: '/docs/tags/habits',
            component: ComponentCreator('/docs/tags/habits', '7ad'),
            exact: true
          },
          {
            path: '/docs/tags/hacking',
            component: ComponentCreator('/docs/tags/hacking', 'bc4'),
            exact: true
          },
          {
            path: '/docs/tags/health',
            component: ComponentCreator('/docs/tags/health', 'c14'),
            exact: true
          },
          {
            path: '/docs/tags/historical-drama',
            component: ComponentCreator('/docs/tags/historical-drama', '930'),
            exact: true
          },
          {
            path: '/docs/tags/history',
            component: ComponentCreator('/docs/tags/history', '4cc'),
            exact: true
          },
          {
            path: '/docs/tags/history-military',
            component: ComponentCreator('/docs/tags/history-military', 'b4c'),
            exact: true
          },
          {
            path: '/docs/tags/hobbies',
            component: ComponentCreator('/docs/tags/hobbies', '882'),
            exact: true
          },
          {
            path: '/docs/tags/holomodor',
            component: ComponentCreator('/docs/tags/holomodor', '320'),
            exact: true
          },
          {
            path: '/docs/tags/home',
            component: ComponentCreator('/docs/tags/home', '77e'),
            exact: true
          },
          {
            path: '/docs/tags/hotkeys',
            component: ComponentCreator('/docs/tags/hotkeys', '243'),
            exact: true
          },
          {
            path: '/docs/tags/ice-baths',
            component: ComponentCreator('/docs/tags/ice-baths', '046'),
            exact: true
          },
          {
            path: '/docs/tags/ideating',
            component: ComponentCreator('/docs/tags/ideating', '6e2'),
            exact: true
          },
          {
            path: '/docs/tags/indian',
            component: ComponentCreator('/docs/tags/indian', '2e6'),
            exact: true
          },
          {
            path: '/docs/tags/indonesia',
            component: ComponentCreator('/docs/tags/indonesia', '6d2'),
            exact: true
          },
          {
            path: '/docs/tags/industralization',
            component: ComponentCreator('/docs/tags/industralization', '9f0'),
            exact: true
          },
          {
            path: '/docs/tags/interesting-reading',
            component: ComponentCreator('/docs/tags/interesting-reading', '272'),
            exact: true
          },
          {
            path: '/docs/tags/investing',
            component: ComponentCreator('/docs/tags/investing', '60c'),
            exact: true
          },
          {
            path: '/docs/tags/iphone',
            component: ComponentCreator('/docs/tags/iphone', '747'),
            exact: true
          },
          {
            path: '/docs/tags/israel',
            component: ComponentCreator('/docs/tags/israel', '2c5'),
            exact: true
          },
          {
            path: '/docs/tags/italian',
            component: ComponentCreator('/docs/tags/italian', 'e21'),
            exact: true
          },
          {
            path: '/docs/tags/japan',
            component: ComponentCreator('/docs/tags/japan', '6cc'),
            exact: true
          },
          {
            path: '/docs/tags/javascript',
            component: ComponentCreator('/docs/tags/javascript', '273'),
            exact: true
          },
          {
            path: '/docs/tags/jim-crow',
            component: ComponentCreator('/docs/tags/jim-crow', 'cc6'),
            exact: true
          },
          {
            path: '/docs/tags/journaling',
            component: ComponentCreator('/docs/tags/journaling', '0e5'),
            exact: true
          },
          {
            path: '/docs/tags/journalism',
            component: ComponentCreator('/docs/tags/journalism', '72d'),
            exact: true
          },
          {
            path: '/docs/tags/keyboard',
            component: ComponentCreator('/docs/tags/keyboard', 'ef4'),
            exact: true
          },
          {
            path: '/docs/tags/keyboard-maestro',
            component: ComponentCreator('/docs/tags/keyboard-maestro', '946'),
            exact: true
          },
          {
            path: '/docs/tags/keyboard-shortcuts',
            component: ComponentCreator('/docs/tags/keyboard-shortcuts', 'a4f'),
            exact: true
          },
          {
            path: '/docs/tags/kitchen',
            component: ComponentCreator('/docs/tags/kitchen', 'e0f'),
            exact: true
          },
          {
            path: '/docs/tags/knife',
            component: ComponentCreator('/docs/tags/knife', 'd15'),
            exact: true
          },
          {
            path: '/docs/tags/knowledge',
            component: ComponentCreator('/docs/tags/knowledge', '25b'),
            exact: true
          },
          {
            path: '/docs/tags/knowledge-wiki',
            component: ComponentCreator('/docs/tags/knowledge-wiki', '48b'),
            exact: true
          },
          {
            path: '/docs/tags/language',
            component: ComponentCreator('/docs/tags/language', '44f'),
            exact: true
          },
          {
            path: '/docs/tags/laos',
            component: ComponentCreator('/docs/tags/laos', '5b5'),
            exact: true
          },
          {
            path: '/docs/tags/large-language-models',
            component: ComponentCreator('/docs/tags/large-language-models', '739'),
            exact: true
          },
          {
            path: '/docs/tags/leadership',
            component: ComponentCreator('/docs/tags/leadership', '5e6'),
            exact: true
          },
          {
            path: '/docs/tags/learning',
            component: ComponentCreator('/docs/tags/learning', '35e'),
            exact: true
          },
          {
            path: '/docs/tags/lectures',
            component: ComponentCreator('/docs/tags/lectures', 'f36'),
            exact: true
          },
          {
            path: '/docs/tags/lexicography',
            component: ComponentCreator('/docs/tags/lexicography', '25c'),
            exact: true
          },
          {
            path: '/docs/tags/life',
            component: ComponentCreator('/docs/tags/life', '888'),
            exact: true
          },
          {
            path: '/docs/tags/literature',
            component: ComponentCreator('/docs/tags/literature', '0bd'),
            exact: true
          },
          {
            path: '/docs/tags/living',
            component: ComponentCreator('/docs/tags/living', '718'),
            exact: true
          },
          {
            path: '/docs/tags/llm',
            component: ComponentCreator('/docs/tags/llm', 'ab8'),
            exact: true
          },
          {
            path: '/docs/tags/logistics',
            component: ComponentCreator('/docs/tags/logistics', 'fca'),
            exact: true
          },
          {
            path: '/docs/tags/long-form-podcasts',
            component: ComponentCreator('/docs/tags/long-form-podcasts', '231'),
            exact: true
          },
          {
            path: '/docs/tags/love',
            component: ComponentCreator('/docs/tags/love', 'aaa'),
            exact: true
          },
          {
            path: '/docs/tags/m',
            component: ComponentCreator('/docs/tags/m', '4cf'),
            exact: true
          },
          {
            path: '/docs/tags/mac',
            component: ComponentCreator('/docs/tags/mac', '72a'),
            exact: true
          },
          {
            path: '/docs/tags/machine-learning',
            component: ComponentCreator('/docs/tags/machine-learning', '83a'),
            exact: true
          },
          {
            path: '/docs/tags/management',
            component: ComponentCreator('/docs/tags/management', '2d3'),
            exact: true
          },
          {
            path: '/docs/tags/maritime',
            component: ComponentCreator('/docs/tags/maritime', '3c4'),
            exact: true
          },
          {
            path: '/docs/tags/markdown',
            component: ComponentCreator('/docs/tags/markdown', '1a3'),
            exact: true
          },
          {
            path: '/docs/tags/marketing',
            component: ComponentCreator('/docs/tags/marketing', 'e54'),
            exact: true
          },
          {
            path: '/docs/tags/mathematics',
            component: ComponentCreator('/docs/tags/mathematics', 'dbc'),
            exact: true
          },
          {
            path: '/docs/tags/mathematics-game-theory',
            component: ComponentCreator('/docs/tags/mathematics-game-theory', '04c'),
            exact: true
          },
          {
            path: '/docs/tags/meal-prep',
            component: ComponentCreator('/docs/tags/meal-prep', 'dde'),
            exact: true
          },
          {
            path: '/docs/tags/meditation',
            component: ComponentCreator('/docs/tags/meditation', 'a66'),
            exact: true
          },
          {
            path: '/docs/tags/memoir',
            component: ComponentCreator('/docs/tags/memoir', 'f08'),
            exact: true
          },
          {
            path: '/docs/tags/mental-hurdles',
            component: ComponentCreator('/docs/tags/mental-hurdles', 'eb1'),
            exact: true
          },
          {
            path: '/docs/tags/microsoft',
            component: ComponentCreator('/docs/tags/microsoft', '36e'),
            exact: true
          },
          {
            path: '/docs/tags/military',
            component: ComponentCreator('/docs/tags/military', '970'),
            exact: true
          },
          {
            path: '/docs/tags/mind',
            component: ComponentCreator('/docs/tags/mind', 'c2c'),
            exact: true
          },
          {
            path: '/docs/tags/mindfulness',
            component: ComponentCreator('/docs/tags/mindfulness', '654'),
            exact: true
          },
          {
            path: '/docs/tags/missing-quotes',
            component: ComponentCreator('/docs/tags/missing-quotes', 'a6d'),
            exact: true
          },
          {
            path: '/docs/tags/mlops',
            component: ComponentCreator('/docs/tags/mlops', '459'),
            exact: true
          },
          {
            path: '/docs/tags/mobile-development',
            component: ComponentCreator('/docs/tags/mobile-development', '900'),
            exact: true
          },
          {
            path: '/docs/tags/money',
            component: ComponentCreator('/docs/tags/money', 'c55'),
            exact: true
          },
          {
            path: '/docs/tags/motivation',
            component: ComponentCreator('/docs/tags/motivation', '064'),
            exact: true
          },
          {
            path: '/docs/tags/music',
            component: ComponentCreator('/docs/tags/music', '497'),
            exact: true
          },
          {
            path: '/docs/tags/nationalism',
            component: ComponentCreator('/docs/tags/nationalism', '338'),
            exact: true
          },
          {
            path: '/docs/tags/natural-language',
            component: ComponentCreator('/docs/tags/natural-language', '89f'),
            exact: true
          },
          {
            path: '/docs/tags/neo-conservatism',
            component: ComponentCreator('/docs/tags/neo-conservatism', 'fcf'),
            exact: true
          },
          {
            path: '/docs/tags/neural-networks',
            component: ComponentCreator('/docs/tags/neural-networks', '21c'),
            exact: true
          },
          {
            path: '/docs/tags/neuroscience',
            component: ComponentCreator('/docs/tags/neuroscience', '071'),
            exact: true
          },
          {
            path: '/docs/tags/nlp',
            component: ComponentCreator('/docs/tags/nlp', 'e53'),
            exact: true
          },
          {
            path: '/docs/tags/non-fiction',
            component: ComponentCreator('/docs/tags/non-fiction', 'ddd'),
            exact: true
          },
          {
            path: '/docs/tags/non-linearities',
            component: ComponentCreator('/docs/tags/non-linearities', '951'),
            exact: true
          },
          {
            path: '/docs/tags/norwegian-books',
            component: ComponentCreator('/docs/tags/norwegian-books', 'c82'),
            exact: true
          },
          {
            path: '/docs/tags/norwegian-language',
            component: ComponentCreator('/docs/tags/norwegian-language', '7d5'),
            exact: true
          },
          {
            path: '/docs/tags/notes',
            component: ComponentCreator('/docs/tags/notes', 'f55'),
            exact: true
          },
          {
            path: '/docs/tags/notetaking',
            component: ComponentCreator('/docs/tags/notetaking', '93f'),
            exact: true
          },
          {
            path: '/docs/tags/nutrition',
            component: ComponentCreator('/docs/tags/nutrition', 'e23'),
            exact: true
          },
          {
            path: '/docs/tags/obsidian',
            component: ComponentCreator('/docs/tags/obsidian', 'd7d'),
            exact: true
          },
          {
            path: '/docs/tags/oil',
            component: ComponentCreator('/docs/tags/oil', '2fe'),
            exact: true
          },
          {
            path: '/docs/tags/one-hot-encoding',
            component: ComponentCreator('/docs/tags/one-hot-encoding', 'e5c'),
            exact: true
          },
          {
            path: '/docs/tags/optimimization',
            component: ComponentCreator('/docs/tags/optimimization', '589'),
            exact: true
          },
          {
            path: '/docs/tags/orwell',
            component: ComponentCreator('/docs/tags/orwell', '11d'),
            exact: true
          },
          {
            path: '/docs/tags/pakistani',
            component: ComponentCreator('/docs/tags/pakistani', '67a'),
            exact: true
          },
          {
            path: '/docs/tags/palestine',
            component: ComponentCreator('/docs/tags/palestine', 'fab'),
            exact: true
          },
          {
            path: '/docs/tags/pandas',
            component: ComponentCreator('/docs/tags/pandas', '3ea'),
            exact: true
          },
          {
            path: '/docs/tags/pasta',
            component: ComponentCreator('/docs/tags/pasta', '719'),
            exact: true
          },
          {
            path: '/docs/tags/performance',
            component: ComponentCreator('/docs/tags/performance', '364'),
            exact: true
          },
          {
            path: '/docs/tags/period-drama',
            component: ComponentCreator('/docs/tags/period-drama', '94e'),
            exact: true
          },
          {
            path: '/docs/tags/personal',
            component: ComponentCreator('/docs/tags/personal', '569'),
            exact: true
          },
          {
            path: '/docs/tags/personal-development',
            component: ComponentCreator('/docs/tags/personal-development', '745'),
            exact: true
          },
          {
            path: '/docs/tags/personal-finance',
            component: ComponentCreator('/docs/tags/personal-finance', 'efc'),
            exact: true
          },
          {
            path: '/docs/tags/philosophy',
            component: ComponentCreator('/docs/tags/philosophy', '35e'),
            exact: true
          },
          {
            path: '/docs/tags/phone',
            component: ComponentCreator('/docs/tags/phone', 'a1e'),
            exact: true
          },
          {
            path: '/docs/tags/physics',
            component: ComponentCreator('/docs/tags/physics', '394'),
            exact: true
          },
          {
            path: '/docs/tags/physics-quantum-physics',
            component: ComponentCreator('/docs/tags/physics-quantum-physics', '0a1'),
            exact: true
          },
          {
            path: '/docs/tags/places',
            component: ComponentCreator('/docs/tags/places', '015'),
            exact: true
          },
          {
            path: '/docs/tags/plants',
            component: ComponentCreator('/docs/tags/plants', '648'),
            exact: true
          },
          {
            path: '/docs/tags/podcasts',
            component: ComponentCreator('/docs/tags/podcasts', '69b'),
            exact: true
          },
          {
            path: '/docs/tags/poetics',
            component: ComponentCreator('/docs/tags/poetics', '2b6'),
            exact: true
          },
          {
            path: '/docs/tags/political-science',
            component: ComponentCreator('/docs/tags/political-science', '352'),
            exact: true
          },
          {
            path: '/docs/tags/politics',
            component: ComponentCreator('/docs/tags/politics', '05e'),
            exact: true
          },
          {
            path: '/docs/tags/post-modernism',
            component: ComponentCreator('/docs/tags/post-modernism', '6f8'),
            exact: true
          },
          {
            path: '/docs/tags/postgresql',
            component: ComponentCreator('/docs/tags/postgresql', '530'),
            exact: true
          },
          {
            path: '/docs/tags/power',
            component: ComponentCreator('/docs/tags/power', '3e6'),
            exact: true
          },
          {
            path: '/docs/tags/prices',
            component: ComponentCreator('/docs/tags/prices', '23e'),
            exact: true
          },
          {
            path: '/docs/tags/processes',
            component: ComponentCreator('/docs/tags/processes', 'dee'),
            exact: true
          },
          {
            path: '/docs/tags/product-management',
            component: ComponentCreator('/docs/tags/product-management', '61c'),
            exact: true
          },
          {
            path: '/docs/tags/product-recommendation',
            component: ComponentCreator('/docs/tags/product-recommendation', 'c88'),
            exact: true
          },
          {
            path: '/docs/tags/productivity',
            component: ComponentCreator('/docs/tags/productivity', '4fd'),
            exact: true
          },
          {
            path: '/docs/tags/productivity-hack',
            component: ComponentCreator('/docs/tags/productivity-hack', 'fdc'),
            exact: true
          },
          {
            path: '/docs/tags/programming',
            component: ComponentCreator('/docs/tags/programming', '778'),
            exact: true
          },
          {
            path: '/docs/tags/psychology',
            component: ComponentCreator('/docs/tags/psychology', 'dc3'),
            exact: true
          },
          {
            path: '/docs/tags/python',
            component: ComponentCreator('/docs/tags/python', 'd96'),
            exact: true
          },
          {
            path: '/docs/tags/quantitative-analysis',
            component: ComponentCreator('/docs/tags/quantitative-analysis', '87d'),
            exact: true
          },
          {
            path: '/docs/tags/quick-food',
            component: ComponentCreator('/docs/tags/quick-food', '84c'),
            exact: true
          },
          {
            path: '/docs/tags/quotes',
            component: ComponentCreator('/docs/tags/quotes', '0b1'),
            exact: true
          },
          {
            path: '/docs/tags/ranking-systems',
            component: ComponentCreator('/docs/tags/ranking-systems', 'db8'),
            exact: true
          },
          {
            path: '/docs/tags/react',
            component: ComponentCreator('/docs/tags/react', '7c3'),
            exact: true
          },
          {
            path: '/docs/tags/reading',
            component: ComponentCreator('/docs/tags/reading', 'fe4'),
            exact: true
          },
          {
            path: '/docs/tags/recipe',
            component: ComponentCreator('/docs/tags/recipe', 'c14'),
            exact: true
          },
          {
            path: '/docs/tags/recipes',
            component: ComponentCreator('/docs/tags/recipes', 'd48'),
            exact: true
          },
          {
            path: '/docs/tags/recommender-systems',
            component: ComponentCreator('/docs/tags/recommender-systems', '871'),
            exact: true
          },
          {
            path: '/docs/tags/relationships',
            component: ComponentCreator('/docs/tags/relationships', 'e60'),
            exact: true
          },
          {
            path: '/docs/tags/relaxing',
            component: ComponentCreator('/docs/tags/relaxing', '0d3'),
            exact: true
          },
          {
            path: '/docs/tags/religion',
            component: ComponentCreator('/docs/tags/religion', '350'),
            exact: true
          },
          {
            path: '/docs/tags/remote-work',
            component: ComponentCreator('/docs/tags/remote-work', '725'),
            exact: true
          },
          {
            path: '/docs/tags/responsibility',
            component: ComponentCreator('/docs/tags/responsibility', 'ef6'),
            exact: true
          },
          {
            path: '/docs/tags/revolution',
            component: ComponentCreator('/docs/tags/revolution', 'b5c'),
            exact: true
          },
          {
            path: '/docs/tags/rice',
            component: ComponentCreator('/docs/tags/rice', '5f4'),
            exact: true
          },
          {
            path: '/docs/tags/rights',
            component: ComponentCreator('/docs/tags/rights', '819'),
            exact: true
          },
          {
            path: '/docs/tags/roman',
            component: ComponentCreator('/docs/tags/roman', '5be'),
            exact: true
          },
          {
            path: '/docs/tags/russian-litterature',
            component: ComponentCreator('/docs/tags/russian-litterature', '824'),
            exact: true
          },
          {
            path: '/docs/tags/rust',
            component: ComponentCreator('/docs/tags/rust', 'f29'),
            exact: true
          },
          {
            path: '/docs/tags/sapporo',
            component: ComponentCreator('/docs/tags/sapporo', '4e0'),
            exact: true
          },
          {
            path: '/docs/tags/satire',
            component: ComponentCreator('/docs/tags/satire', '1f9'),
            exact: true
          },
          {
            path: '/docs/tags/scepticism',
            component: ComponentCreator('/docs/tags/scepticism', 'e4f'),
            exact: true
          },
          {
            path: '/docs/tags/science',
            component: ComponentCreator('/docs/tags/science', '217'),
            exact: true
          },
          {
            path: '/docs/tags/science-fiction',
            component: ComponentCreator('/docs/tags/science-fiction', '582'),
            exact: true
          },
          {
            path: '/docs/tags/scientific-method',
            component: ComponentCreator('/docs/tags/scientific-method', 'ac4'),
            exact: true
          },
          {
            path: '/docs/tags/scrum',
            component: ComponentCreator('/docs/tags/scrum', '76b'),
            exact: true
          },
          {
            path: '/docs/tags/seafood',
            component: ComponentCreator('/docs/tags/seafood', 'c42'),
            exact: true
          },
          {
            path: '/docs/tags/seeds',
            component: ComponentCreator('/docs/tags/seeds', '0e2'),
            exact: true
          },
          {
            path: '/docs/tags/self-help-book',
            component: ComponentCreator('/docs/tags/self-help-book', '11d'),
            exact: true
          },
          {
            path: '/docs/tags/self-improvement',
            component: ComponentCreator('/docs/tags/self-improvement', 'b56'),
            exact: true
          },
          {
            path: '/docs/tags/sharing',
            component: ComponentCreator('/docs/tags/sharing', '186'),
            exact: true
          },
          {
            path: '/docs/tags/shell',
            component: ComponentCreator('/docs/tags/shell', '658'),
            exact: true
          },
          {
            path: '/docs/tags/shell-scripting',
            component: ComponentCreator('/docs/tags/shell-scripting', '2e7'),
            exact: true
          },
          {
            path: '/docs/tags/shipping',
            component: ComponentCreator('/docs/tags/shipping', '7de'),
            exact: true
          },
          {
            path: '/docs/tags/show',
            component: ComponentCreator('/docs/tags/show', '552'),
            exact: true
          },
          {
            path: '/docs/tags/silent-retreat',
            component: ComponentCreator('/docs/tags/silent-retreat', '22f'),
            exact: true
          },
          {
            path: '/docs/tags/singapore',
            component: ComponentCreator('/docs/tags/singapore', 'f66'),
            exact: true
          },
          {
            path: '/docs/tags/sixties',
            component: ComponentCreator('/docs/tags/sixties', 'ca8'),
            exact: true
          },
          {
            path: '/docs/tags/sleep',
            component: ComponentCreator('/docs/tags/sleep', '30a'),
            exact: true
          },
          {
            path: '/docs/tags/snowflake',
            component: ComponentCreator('/docs/tags/snowflake', '0e4'),
            exact: true
          },
          {
            path: '/docs/tags/snowpark',
            component: ComponentCreator('/docs/tags/snowpark', '7bb'),
            exact: true
          },
          {
            path: '/docs/tags/socialism',
            component: ComponentCreator('/docs/tags/socialism', 'ced'),
            exact: true
          },
          {
            path: '/docs/tags/software',
            component: ComponentCreator('/docs/tags/software', '7ba'),
            exact: true
          },
          {
            path: '/docs/tags/software-testing',
            component: ComponentCreator('/docs/tags/software-testing', '115'),
            exact: true
          },
          {
            path: '/docs/tags/software-tools',
            component: ComponentCreator('/docs/tags/software-tools', 'fef'),
            exact: true
          },
          {
            path: '/docs/tags/solo-travel',
            component: ComponentCreator('/docs/tags/solo-travel', 'e8d'),
            exact: true
          },
          {
            path: '/docs/tags/sound',
            component: ComponentCreator('/docs/tags/sound', '0ce'),
            exact: true
          },
          {
            path: '/docs/tags/sourbread',
            component: ComponentCreator('/docs/tags/sourbread', '931'),
            exact: true
          },
          {
            path: '/docs/tags/south-east-asia',
            component: ComponentCreator('/docs/tags/south-east-asia', '95e'),
            exact: true
          },
          {
            path: '/docs/tags/sports',
            component: ComponentCreator('/docs/tags/sports', '268'),
            exact: true
          },
          {
            path: '/docs/tags/spotlight',
            component: ComponentCreator('/docs/tags/spotlight', '81c'),
            exact: true
          },
          {
            path: '/docs/tags/sql',
            component: ComponentCreator('/docs/tags/sql', '1aa'),
            exact: true
          },
          {
            path: '/docs/tags/stalinism',
            component: ComponentCreator('/docs/tags/stalinism', 'b8d'),
            exact: true
          },
          {
            path: '/docs/tags/statistics',
            component: ComponentCreator('/docs/tags/statistics', 'f3c'),
            exact: true
          },
          {
            path: '/docs/tags/stew',
            component: ComponentCreator('/docs/tags/stew', '2da'),
            exact: true
          },
          {
            path: '/docs/tags/stocks',
            component: ComponentCreator('/docs/tags/stocks', '1c2'),
            exact: true
          },
          {
            path: '/docs/tags/stoicsm',
            component: ComponentCreator('/docs/tags/stoicsm', '60b'),
            exact: true
          },
          {
            path: '/docs/tags/strategy',
            component: ComponentCreator('/docs/tags/strategy', '365'),
            exact: true
          },
          {
            path: '/docs/tags/strength-training',
            component: ComponentCreator('/docs/tags/strength-training', '7df'),
            exact: true
          },
          {
            path: '/docs/tags/studying',
            component: ComponentCreator('/docs/tags/studying', '366'),
            exact: true
          },
          {
            path: '/docs/tags/surfing',
            component: ComponentCreator('/docs/tags/surfing', '393'),
            exact: true
          },
          {
            path: '/docs/tags/surrealism',
            component: ComponentCreator('/docs/tags/surrealism', '52b'),
            exact: true
          },
          {
            path: '/docs/tags/system-architecture',
            component: ComponentCreator('/docs/tags/system-architecture', '324'),
            exact: true
          },
          {
            path: '/docs/tags/system-thinking',
            component: ComponentCreator('/docs/tags/system-thinking', '0ee'),
            exact: true
          },
          {
            path: '/docs/tags/taking',
            component: ComponentCreator('/docs/tags/taking', '4fd'),
            exact: true
          },
          {
            path: '/docs/tags/taleb',
            component: ComponentCreator('/docs/tags/taleb', 'cb0'),
            exact: true
          },
          {
            path: '/docs/tags/talks',
            component: ComponentCreator('/docs/tags/talks', '7e9'),
            exact: true
          },
          {
            path: '/docs/tags/tdd',
            component: ComponentCreator('/docs/tags/tdd', '958'),
            exact: true
          },
          {
            path: '/docs/tags/teams',
            component: ComponentCreator('/docs/tags/teams', '746'),
            exact: true
          },
          {
            path: '/docs/tags/technology',
            component: ComponentCreator('/docs/tags/technology', '96a'),
            exact: true
          },
          {
            path: '/docs/tags/terminal',
            component: ComponentCreator('/docs/tags/terminal', 'ea9'),
            exact: true
          },
          {
            path: '/docs/tags/terraform',
            component: ComponentCreator('/docs/tags/terraform', 'cc4'),
            exact: true
          },
          {
            path: '/docs/tags/testing',
            component: ComponentCreator('/docs/tags/testing', 'b53'),
            exact: true
          },
          {
            path: '/docs/tags/the-first-law-series',
            component: ComponentCreator('/docs/tags/the-first-law-series', '2e7'),
            exact: true
          },
          {
            path: '/docs/tags/thinking',
            component: ComponentCreator('/docs/tags/thinking', '73d'),
            exact: true
          },
          {
            path: '/docs/tags/time-management',
            component: ComponentCreator('/docs/tags/time-management', 'ff5'),
            exact: true
          },
          {
            path: '/docs/tags/tools',
            component: ComponentCreator('/docs/tags/tools', '1f1'),
            exact: true
          },
          {
            path: '/docs/tags/totalitarianism',
            component: ComponentCreator('/docs/tags/totalitarianism', 'dae'),
            exact: true
          },
          {
            path: '/docs/tags/trade',
            component: ComponentCreator('/docs/tags/trade', '76f'),
            exact: true
          },
          {
            path: '/docs/tags/trading',
            component: ComponentCreator('/docs/tags/trading', 'b55'),
            exact: true
          },
          {
            path: '/docs/tags/transformers',
            component: ComponentCreator('/docs/tags/transformers', '6aa'),
            exact: true
          },
          {
            path: '/docs/tags/travel',
            component: ComponentCreator('/docs/tags/travel', '3d5'),
            exact: true
          },
          {
            path: '/docs/tags/travel-guide',
            component: ComponentCreator('/docs/tags/travel-guide', '401'),
            exact: true
          },
          {
            path: '/docs/tags/truth-seeking',
            component: ComponentCreator('/docs/tags/truth-seeking', 'b31'),
            exact: true
          },
          {
            path: '/docs/tags/ui',
            component: ComponentCreator('/docs/tags/ui', '020'),
            exact: true
          },
          {
            path: '/docs/tags/ukraine',
            component: ComponentCreator('/docs/tags/ukraine', '2af'),
            exact: true
          },
          {
            path: '/docs/tags/uncertainty',
            component: ComponentCreator('/docs/tags/uncertainty', 'ac6'),
            exact: true
          },
          {
            path: '/docs/tags/university',
            component: ComponentCreator('/docs/tags/university', 'a2b'),
            exact: true
          },
          {
            path: '/docs/tags/ux',
            component: ComponentCreator('/docs/tags/ux', '443'),
            exact: true
          },
          {
            path: '/docs/tags/vacation',
            component: ComponentCreator('/docs/tags/vacation', '396'),
            exact: true
          },
          {
            path: '/docs/tags/warfare',
            component: ComponentCreator('/docs/tags/warfare', '9c0'),
            exact: true
          },
          {
            path: '/docs/tags/web-development',
            component: ComponentCreator('/docs/tags/web-development', '15a'),
            exact: true
          },
          {
            path: '/docs/tags/work',
            component: ComponentCreator('/docs/tags/work', 'a30'),
            exact: true
          },
          {
            path: '/docs/tags/working',
            component: ComponentCreator('/docs/tags/working', '68a'),
            exact: true
          },
          {
            path: '/docs/tags/workouts',
            component: ComponentCreator('/docs/tags/workouts', 'afe'),
            exact: true
          },
          {
            path: '/docs/tags/workshop',
            component: ComponentCreator('/docs/tags/workshop', 'ce4'),
            exact: true
          },
          {
            path: '/docs/tags/world-war-ii',
            component: ComponentCreator('/docs/tags/world-war-ii', '747'),
            exact: true
          },
          {
            path: '/docs/tags/writing',
            component: ComponentCreator('/docs/tags/writing', 'c12'),
            exact: true
          },
          {
            path: '/docs/tags/yoga',
            component: ComponentCreator('/docs/tags/yoga', 'f3f'),
            exact: true
          },
          {
            path: '/docs/tags/youtube',
            component: ComponentCreator('/docs/tags/youtube', '633'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0a0'),
            routes: [
              {
                path: '/docs/AI/',
                component: ComponentCreator('/docs/AI/', 'e7c'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/AI Strategy',
                component: ComponentCreator('/docs/AI/AI Strategy', 'e8d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Drift',
                component: ComponentCreator('/docs/AI/Data Drift', '0a7'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Science/',
                component: ComponentCreator('/docs/AI/Data Science/', '6e1'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Science/Computer Vision',
                component: ComponentCreator('/docs/AI/Data Science/Computer Vision', '830'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Science/Data Science Project Start-Up Phase',
                component: ComponentCreator('/docs/AI/Data Science/Data Science Project Start-Up Phase', '9cf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Science/Feature Engineering',
                component: ComponentCreator('/docs/AI/Data Science/Feature Engineering', '223'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Science/ML Design Sprint',
                component: ComponentCreator('/docs/AI/Data Science/ML Design Sprint', '232'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Data Science/Recommendation Systems',
                component: ComponentCreator('/docs/AI/Data Science/Recommendation Systems', '377'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/AI/Language/NLP or LLM',
                component: ComponentCreator('/docs/AI/Language/NLP or LLM', '0bf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Articles/',
                component: ComponentCreator('/docs/Articles/', '176'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Body/',
                component: ComponentCreator('/docs/Body/', '0da'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Quotes 2022',
                component: ComponentCreator('/docs/Books/Book Quotes 2022', '0a5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/1776',
                component: ComponentCreator('/docs/Books/Book Reviews/1776', 'd4c'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/5 Love Languages',
                component: ComponentCreator('/docs/Books/Book Reviews/5 Love Languages', '472'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/97 Things Every Programmer Should Know',
                component: ComponentCreator('/docs/Books/Book Reviews/97 Things Every Programmer Should Know', '0c2'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/A Field Guide to Lies',
                component: ComponentCreator('/docs/Books/Book Reviews/A Field Guide to Lies', '322'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/A little Hatred',
                component: ComponentCreator('/docs/Books/Book Reviews/A little Hatred', 'e6f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/A Mind for Numbers How to Excel at Math and Science',
                component: ComponentCreator('/docs/Books/Book Reviews/A Mind for Numbers How to Excel at Math and Science', '126'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/A Story of Us',
                component: ComponentCreator('/docs/Books/Book Reviews/A Story of Us', '856'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Alchemy',
                component: ComponentCreator('/docs/Books/Book Reviews/Alchemy', 'a26'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Animal Farm',
                component: ComponentCreator('/docs/Books/Book Reviews/Animal Farm', '76b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Automating Your Mac',
                component: ComponentCreator('/docs/Books/Book Reviews/Automating Your Mac', 'c2e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Basic Economics',
                component: ComponentCreator('/docs/Books/Book Reviews/Basic Economics', '6fb'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Best served Cold',
                component: ComponentCreator('/docs/Books/Book Reviews/Best served Cold', '1d9'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Black Boy',
                component: ComponentCreator('/docs/Books/Book Reviews/Black Boy', '1ff'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Books',
                component: ComponentCreator('/docs/Books/Book Reviews/Books', 'dd6'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Breath',
                component: ComponentCreator('/docs/Books/Book Reviews/Breath', 'f40'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Calling Bullshit',
                component: ComponentCreator('/docs/Books/Book Reviews/Calling Bullshit', 'cd0'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Chip War',
                component: ComponentCreator('/docs/Books/Book Reviews/Chip War', '6bf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Crucial Conversations Tools for Talking When Stakes are High',
                component: ComponentCreator('/docs/Books/Book Reviews/Crucial Conversations Tools for Talking When Stakes are High', '66f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Designing Machine Learning Systems',
                component: ComponentCreator('/docs/Books/Book Reviews/Designing Machine Learning Systems', '763'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Economics in One Lesson',
                component: ComponentCreator('/docs/Books/Book Reviews/Economics in One Lesson', '72d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Eisenhorn',
                component: ComponentCreator('/docs/Books/Book Reviews/Eisenhorn', '6b5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Expert Python Programming',
                component: ComponentCreator('/docs/Books/Book Reviews/Expert Python Programming', '7bf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Extreme Ownership',
                component: ComponentCreator('/docs/Books/Book Reviews/Extreme Ownership', '975'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Fifteen Hours',
                component: ComponentCreator('/docs/Books/Book Reviews/Fifteen Hours', 'f3b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Finite and Infinite Games',
                component: ComponentCreator('/docs/Books/Book Reviews/Finite and Infinite Games', 'c50'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Four Thousand Weeks Time Management for Mortals',
                component: ComponentCreator('/docs/Books/Book Reviews/Four Thousand Weeks Time Management for Mortals', '22b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Fundamentals of Data Engineering',
                component: ComponentCreator('/docs/Books/Book Reviews/Fundamentals of Data Engineering', '758'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Hitch 22',
                component: ComponentCreator('/docs/Books/Book Reviews/Hitch 22', '059'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Hooked',
                component: ComponentCreator('/docs/Books/Book Reviews/Hooked', '023'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/How the war was Won',
                component: ComponentCreator('/docs/Books/Book Reviews/How the war was Won', '141'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/How the World Really Works',
                component: ComponentCreator('/docs/Books/Book Reviews/How the World Really Works', '10b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/I Moved Your Cheese',
                component: ComponentCreator('/docs/Books/Book Reviews/I Moved Your Cheese', 'fbf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Imagined Communities',
                component: ComponentCreator('/docs/Books/Book Reviews/Imagined Communities', 'dc1'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Kvitekrist',
                component: ComponentCreator('/docs/Books/Book Reviews/Kvitekrist', '0aa'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Learn Google Flutter Fast',
                component: ComponentCreator('/docs/Books/Book Reviews/Learn Google Flutter Fast', 'ad3'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Letters to a Young Contrarian',
                component: ComponentCreator('/docs/Books/Book Reviews/Letters to a Young Contrarian', 'c9f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Machine Learning Design Patterns',
                component: ComponentCreator('/docs/Books/Book Reviews/Machine Learning Design Patterns', '300'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Made to Stick',
                component: ComponentCreator('/docs/Books/Book Reviews/Made to Stick', '16f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Millennial Love',
                component: ComponentCreator('/docs/Books/Book Reviews/Millennial Love', 'dbc'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Models',
                component: ComponentCreator('/docs/Books/Book Reviews/Models', '3b3'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Moneyball',
                component: ComponentCreator('/docs/Books/Book Reviews/Moneyball', '542'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Nonviolent Communication',
                component: ComponentCreator('/docs/Books/Book Reviews/Nonviolent Communication', '42c'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/On Palestine',
                component: ComponentCreator('/docs/Books/Book Reviews/On Palestine', 'f5a'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Payments Systems in the US',
                component: ComponentCreator('/docs/Books/Book Reviews/Payments Systems in the US', 'd7a'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Peopleware',
                component: ComponentCreator('/docs/Books/Book Reviews/Peopleware', 'fdc'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Personal MBA',
                component: ComponentCreator('/docs/Books/Book Reviews/Personal MBA', 'fbd'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Practical MLOps',
                component: ComponentCreator('/docs/Books/Book Reviews/Practical MLOps', '115'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Practical Recommendation Systems',
                component: ComponentCreator('/docs/Books/Book Reviews/Practical Recommendation Systems', '7c4'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Pricing and Revenue Optimization',
                component: ComponentCreator('/docs/Books/Book Reviews/Pricing and Revenue Optimization', 'eb4'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Python Tricks',
                component: ComponentCreator('/docs/Books/Book Reviews/Python Tricks', 'd25'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Red Country',
                component: ComponentCreator('/docs/Books/Book Reviews/Red Country', '694'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Red Famine',
                component: ComponentCreator('/docs/Books/Book Reviews/Red Famine', 'bdf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Rich Dad, Poor Dad',
                component: ComponentCreator('/docs/Books/Book Reviews/Rich Dad, Poor Dad', '629'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Slaughterhouse Five',
                component: ComponentCreator('/docs/Books/Book Reviews/Slaughterhouse Five', 'def'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Soul in the Game',
                component: ComponentCreator('/docs/Books/Book Reviews/Soul in the Game', 'ab5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Spark The Revolutionary New Science of Exercise and the Brain',
                component: ComponentCreator('/docs/Books/Book Reviews/Spark The Revolutionary New Science of Exercise and the Brain', 'f26'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Start with No',
                component: ComponentCreator('/docs/Books/Book Reviews/Start with No', '536'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Stoner',
                component: ComponentCreator('/docs/Books/Book Reviews/Stoner', '0fd'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Take Control of Automating Your Mac',
                component: ComponentCreator('/docs/Books/Book Reviews/Take Control of Automating Your Mac', '19e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The blade Itself',
                component: ComponentCreator('/docs/Books/Book Reviews/The blade Itself', '6aa'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Blind Watchmaker',
                component: ComponentCreator('/docs/Books/Book Reviews/The Blind Watchmaker', '07e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Box How the Shipping Container Made the World Smaller and the World Economy Bigger',
                component: ComponentCreator('/docs/Books/Book Reviews/The Box How the Shipping Container Made the World Smaller and the World Economy Bigger', '96e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Brothers Karamazov',
                component: ComponentCreator('/docs/Books/Book Reviews/The Brothers Karamazov', '6f7'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Capitalist Manifesto',
                component: ComponentCreator('/docs/Books/Book Reviews/The Capitalist Manifesto', '9db'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Case Against Reality Why Evolution Hid the Truth from Our Eyes',
                component: ComponentCreator('/docs/Books/Book Reviews/The Case Against Reality Why Evolution Hid the Truth from Our Eyes', 'aef'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Case Against the Sexual Revolution',
                component: ComponentCreator('/docs/Books/Book Reviews/The Case Against the Sexual Revolution', '9fe'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Creativity Code',
                component: ComponentCreator('/docs/Books/Book Reviews/The Creativity Code', '3cd'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Dictator\'s Handbook',
                component: ComponentCreator('/docs/Books/Book Reviews/The Dictator\'s Handbook', '2b9'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The First World War',
                component: ComponentCreator('/docs/Books/Book Reviews/The First World War', '37b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Man from the Future The Visionary Life of John von Neumann',
                component: ComponentCreator('/docs/Books/Book Reviews/The Man from the Future The Visionary Life of John von Neumann', '242'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Myth of Sisyphus',
                component: ComponentCreator('/docs/Books/Book Reviews/The Myth of Sisyphus', 'd96'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The organized mind',
                component: ComponentCreator('/docs/Books/Book Reviews/The organized mind', 'e18'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Quants',
                component: ComponentCreator('/docs/Books/Book Reviews/The Quants', 'ea6'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Stranger',
                component: ComponentCreator('/docs/Books/Book Reviews/The Stranger', '921'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Structure of Scientific Revolutions',
                component: ComponentCreator('/docs/Books/Book Reviews/The Structure of Scientific Revolutions', '5df'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Triumph of Seeds',
                component: ComponentCreator('/docs/Books/Book Reviews/The Triumph of Seeds', '182'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Trouble with Peace',
                component: ComponentCreator('/docs/Books/Book Reviews/The Trouble with Peace', '114'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Wim Hof Method',
                component: ComponentCreator('/docs/Books/Book Reviews/The Wim Hof Method', '590'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/The Wisdom of Crowds',
                component: ComponentCreator('/docs/Books/Book Reviews/The Wisdom of Crowds', '3a6'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Thinking in Systems',
                component: ComponentCreator('/docs/Books/Book Reviews/Thinking in Systems', '4e3'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Washington\'s Spies. The Story of America\'s First Spy Ring',
                component: ComponentCreator('/docs/Books/Book Reviews/Washington\'s Spies. The Story of America\'s First Spy Ring', '32b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/When Reason goes on Holliday',
                component: ComponentCreator('/docs/Books/Book Reviews/When Reason goes on Holliday', '654'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Why Orwell Matters',
                component: ComponentCreator('/docs/Books/Book Reviews/Why Orwell Matters', 'ca8'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Why we get fat and what to do about it',
                component: ComponentCreator('/docs/Books/Book Reviews/Why we get fat and what to do about it', '950'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Word by Word',
                component: ComponentCreator('/docs/Books/Book Reviews/Word by Word', '97e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Your Brain at Work',
                component: ComponentCreator('/docs/Books/Book Reviews/Your Brain at Work', 'c71'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Book Reviews/Zen & The Art of Motorcycle Maintenance',
                component: ComponentCreator('/docs/Books/Book Reviews/Zen & The Art of Motorcycle Maintenance', '58c'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Booklist 2023',
                component: ComponentCreator('/docs/Books/Booklist 2023', '9d6'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Booklist 2024',
                component: ComponentCreator('/docs/Books/Booklist 2024', '212'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Literature/',
                component: ComponentCreator('/docs/Books/Literature/', '502'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Books/Literature/Poems',
                component: ComponentCreator('/docs/Books/Literature/Poems', '9d2'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Career/',
                component: ComponentCreator('/docs/Career/', '8f7'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Cloud/',
                component: ComponentCreator('/docs/Cloud/', '102'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Cloud/AWS',
                component: ComponentCreator('/docs/Cloud/AWS', 'b98'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Cloud/Azure',
                component: ComponentCreator('/docs/Cloud/Azure', '572'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Cloud/GCP',
                component: ComponentCreator('/docs/Cloud/GCP', '0b2'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Curiosity/',
                component: ComponentCreator('/docs/Curiosity/', '66f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/CyberSecurity/',
                component: ComponentCreator('/docs/CyberSecurity/', '7b2'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Database/',
                component: ComponentCreator('/docs/Database/', '5e8'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Database/Postgres',
                component: ComponentCreator('/docs/Database/Postgres', '15e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Database/Snowflake',
                component: ComponentCreator('/docs/Database/Snowflake', '157'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Decision',
                component: ComponentCreator('/docs/Decision', '585'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Design/',
                component: ComponentCreator('/docs/Design/', '898'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/DevOps/',
                component: ComponentCreator('/docs/DevOps/', 'ea7'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/DevOps/Git',
                component: ComponentCreator('/docs/DevOps/Git', '1a3'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/DevOps/GitHub Actions',
                component: ComponentCreator('/docs/DevOps/GitHub Actions', '3ac'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Economics/',
                component: ComponentCreator('/docs/Economics/', '319'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Economics/Investing',
                component: ComponentCreator('/docs/Economics/Investing', '813'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Entertainment/TV-Shows/',
                component: ComponentCreator('/docs/Entertainment/TV-Shows/', '84d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Entertainment/TV-Shows/Mad Men',
                component: ComponentCreator('/docs/Entertainment/TV-Shows/Mad Men', '577'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Entertainment/TV-Shows/The Wire',
                component: ComponentCreator('/docs/Entertainment/TV-Shows/The Wire', 'b4b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Exercise/',
                component: ComponentCreator('/docs/Exercise/', '332'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Exercise/Flexibility/',
                component: ComponentCreator('/docs/Exercise/Flexibility/', '824'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Exercise/Strength/',
                component: ComponentCreator('/docs/Exercise/Strength/', 'ab9'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/',
                component: ComponentCreator('/docs/Food/', '1a5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Baking',
                component: ComponentCreator('/docs/Food/Baking', '816'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Coffee',
                component: ComponentCreator('/docs/Food/Coffee', '387'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Drink',
                component: ComponentCreator('/docs/Food/Drink', '680'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Equipment',
                component: ComponentCreator('/docs/Food/Equipment', '6dc'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Kitchen',
                component: ComponentCreator('/docs/Food/Kitchen', 'cc8'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/',
                component: ComponentCreator('/docs/Food/Recipes/', '410'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Aglio e Olio',
                component: ComponentCreator('/docs/Food/Recipes/Aglio e Olio', '7bf'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Biryani',
                component: ComponentCreator('/docs/Food/Recipes/Biryani', 'd57'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Crab Pasta',
                component: ComponentCreator('/docs/Food/Recipes/Crab Pasta', 'efd'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Maqlouba',
                component: ComponentCreator('/docs/Food/Recipes/Maqlouba', '579'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Osso Bucco',
                component: ComponentCreator('/docs/Food/Recipes/Osso Bucco', '828'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Pasta',
                component: ComponentCreator('/docs/Food/Recipes/Pasta', 'e72'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Food/Recipes/Recipes to try',
                component: ComponentCreator('/docs/Food/Recipes/Recipes to try', 'dd0'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Iphone/',
                component: ComponentCreator('/docs/Iphone/', '4d7'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Iphone/Apps',
                component: ComponentCreator('/docs/Iphone/Apps', 'f9e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Language/',
                component: ComponentCreator('/docs/Language/', 'c7a'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Learning/',
                component: ComponentCreator('/docs/Learning/', '8f5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Learning/Lectures',
                component: ComponentCreator('/docs/Learning/Lectures', '5d5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Learning/Talks',
                component: ComponentCreator('/docs/Learning/Talks', '51b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Living/',
                component: ComponentCreator('/docs/Living/', 'a21'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Living/Home',
                component: ComponentCreator('/docs/Living/Home', '31c'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mac/',
                component: ComponentCreator('/docs/Mac/', 'b01'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mac/Alfred',
                component: ComponentCreator('/docs/Mac/Alfred', '5fd'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mac/Karabiner',
                component: ComponentCreator('/docs/Mac/Karabiner', '38d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mac/Obsidian',
                component: ComponentCreator('/docs/Mac/Obsidian', '62b'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mac/Terminal',
                component: ComponentCreator('/docs/Mac/Terminal', '9c5'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mathematics/',
                component: ComponentCreator('/docs/Mathematics/', '90f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Mathematics/Chaos',
                component: ComponentCreator('/docs/Mathematics/Chaos', '0f3'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Motivation/',
                component: ComponentCreator('/docs/Motivation/', '612'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Music/',
                component: ComponentCreator('/docs/Music/', 'd6f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Music/Discover and Sharing',
                component: ComponentCreator('/docs/Music/Discover and Sharing', 'ebc'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Obsidian/',
                component: ComponentCreator('/docs/Obsidian/', 'a78'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Personal',
                component: ComponentCreator('/docs/Personal', '0ac'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Philosophy/',
                component: ComponentCreator('/docs/Philosophy/', '88f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Philosophy/On The Duality of Rights and Responsibilities',
                component: ComponentCreator('/docs/Philosophy/On The Duality of Rights and Responsibilities', 'bee'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Philosophy/Religion',
                component: ComponentCreator('/docs/Philosophy/Religion', '765'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Podcasts/',
                component: ComponentCreator('/docs/Podcasts/', 'c87'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Politics/',
                component: ComponentCreator('/docs/Politics/', 'dc9'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Productivity/',
                component: ComponentCreator('/docs/Productivity/', 'e26'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Productivity/Productivity Theory',
                component: ComponentCreator('/docs/Productivity/Productivity Theory', '068'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/',
                component: ComponentCreator('/docs/Programming/', 'b5d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/Flutter',
                component: ComponentCreator('/docs/Programming/Flutter', '41e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/Javascript',
                component: ComponentCreator('/docs/Programming/Javascript', 'bd8'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/Python/',
                component: ComponentCreator('/docs/Programming/Python/', 'e8f'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/Python/FastAPI',
                component: ComponentCreator('/docs/Programming/Python/FastAPI', 'fdc'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/Python/Pytest',
                component: ComponentCreator('/docs/Programming/Python/Pytest', 'dba'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/Rust',
                component: ComponentCreator('/docs/Programming/Rust', 'd98'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Programming/SQL',
                component: ComponentCreator('/docs/Programming/SQL', '4c1'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Thinking/',
                component: ComponentCreator('/docs/Thinking/', 'f8e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Tools/',
                component: ComponentCreator('/docs/Tools/', '5de'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Tools/ChatGPT',
                component: ComponentCreator('/docs/Tools/ChatGPT', '97a'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Travel/',
                component: ComponentCreator('/docs/Travel/', '4da'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Travel/Places/',
                component: ComponentCreator('/docs/Travel/Places/', '3a4'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Travel/Places/Bali',
                component: ComponentCreator('/docs/Travel/Places/Bali', 'c2d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Travel/Places/Laos',
                component: ComponentCreator('/docs/Travel/Places/Laos', '4a0'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Travel/Places/Sapporo and Niseko',
                component: ComponentCreator('/docs/Travel/Places/Sapporo and Niseko', 'f87'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Travel/Places/Singapore',
                component: ComponentCreator('/docs/Travel/Places/Singapore', '8dc'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Working/',
                component: ComponentCreator('/docs/Working/', '9b8'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Working/Agile',
                component: ComponentCreator('/docs/Working/Agile', '41d'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Working/Management',
                component: ComponentCreator('/docs/Working/Management', 'a5e'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Working/Remote Work',
                component: ComponentCreator('/docs/Working/Remote Work', '38a'),
                exact: true,
                sidebar: "gardenSidebar"
              },
              {
                path: '/docs/Writing/',
                component: ComponentCreator('/docs/Writing/', '364'),
                exact: true,
                sidebar: "gardenSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '640'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
