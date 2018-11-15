const LINKS = [
  {
    label: 'Home', to: '/', exact: true,
    submenu: [
      { label: '↑ GitHub', to: 'https://github.com/srgg6701/ReactAdvanced' }
    ]
  },
  { label: 'Children', to: '/children' },
  { label: 'Context', to: '/context' },
  { label: 'HOCs', to: '/HOCs' },
  { label: 'Lazy', to: '/lazy' },
  { label: 'Lifecycle', to: '/lifecycle' },
  {
    label: 'Puritan', to: '/puritan',
    submenu: [
      { label: 'Inner', to: '/inner' }
    ]
  },
  { label: 'Refs', to: '/refs' },
  { label: 'Routing', to: '/routing' }
];
export default LINKS