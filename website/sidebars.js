/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  resourceSidebar: [
    {
      type: 'category',
      label: 'Pharmacy',
      items: [
        'pharmacy/regulatory',
        'pharmacy/journals',
        'pharmacy/industry-websites'
      ],
    },
    {
      type: 'category',
      label: 'Ebooks',
      items: [
        'ebooks/search-engines',
        'ebooks/online-libraries',
        'ebooks/professional-literature'
      ],
    },
    {
      type: 'category',
      label: 'AI Tools',
      items: [
        'ai-tools/prompt-libraries',
        'ai-tools/ai-tools-list',
        'ai-tools/ai-applications'
      ],
    },
    {
      type: 'category',
      label: 'Torrent Search',
      items: [
        'bt-download/search-engines',
        'bt-download/download-tools'
      ],
    },
    // 暂时注释掉不存在的文档引用
    // {
    //   type: 'category',
    //   label: '学习网站',
    //   items: [
    //     'learning/online-courses',
    //     'learning/educational-resources'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '实用导航',
    //   items: [
    //     'practical-nav/website-collections'
    //   ],
    // },
  ],
};

module.exports = sidebars;