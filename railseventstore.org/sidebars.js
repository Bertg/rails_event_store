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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/introduction",
        "getting-started/install",
        "getting-started/api",
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "core-concepts/publish",
        "core-concepts/subscribe",
        "core-concepts/read",
        "core-concepts/link",
        "core-concepts/delete",
        "core-concepts/pubsub",
        "core-concepts/event-sourcing",
        "core-concepts/expected-version",
        "core-concepts/projections",
        "core-concepts/request-metadata",
        "core-concepts/correlation-causation",
        "core-concepts/rspec",
        "core-concepts/browser",
        "core-concepts/client-errors",
      ],
    },
    {
      type: "category",
      label: "Advanced Topics",
      collapsible: true,
      collapsed: false,
      items: [
        "advanced-topics/transactions",
        "advanced-topics/bi-temporal",
        "advanced-topics/event-serialization-formats",
        "advanced-topics/mappers",
        "advanced-topics/custom-repository",
        "advanced-topics/instrumentation",
        "advanced-topics/command-bus",
        "advanced-topics/mapping-handlers-to-events",
        "advanced-topics/gdpr",
        "advanced-topics/migrating-existing-events",
        "advanced-topics/without-rails",
        "advanced-topics/protobuf.html"
      ],
    },
    {
      type: "category",
      label: "Common Usage Patterns",
      collapsible: true,
      collapsed: false,
      items: [
        "common-usage-patterns/publishing_unique_events",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      collapsible: true,
      collapsed: false,
      items: ["contributing/maintenance_policy"],
    }
  ],

};

export default sidebars;
