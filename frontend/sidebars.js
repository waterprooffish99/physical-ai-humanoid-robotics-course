/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: Introduction to Physical AI',
      items: [
        'module-1/intro',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Sensors and Perception',
      items: [
        'module-2/intro',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Actuation and Control',
      items: [
        'module-3/intro',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: AI for Robotics',
      items: [
        'module-4/intro',
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project',
      items: [
        'capstone/intro',
      ],
    },
  ],
};

module.exports = sidebars;