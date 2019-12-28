export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e079f1bafb89cc82d025017',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ncsacj8i',
                  apiId: '63032415-591b-4bab-b947-f51f401acd97'
                },
                {
                  buildHookId: '5e079f1c64702980e1f643f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1yhjaxzm',
                  apiId: '889e9868-d31a-49ba-9507-e7f9760581dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/quynguyenxuan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1yhjaxzm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
