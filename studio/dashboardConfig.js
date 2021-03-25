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
                  buildHookId: '605c9a75aeab6330ba6b1324',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j5qswb8y',
                  apiId: '50533cff-3d16-45ef-a18d-3369b90929fe'
                },
                {
                  buildHookId: '605c9a768ab4282beb24e744',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c3faq58k',
                  apiId: 'ebd58c91-1d60-4ba4-b187-ae7ba7b9361a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TecFelipeDsMartins/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c3faq58k.netlify.app', category: 'apps'}
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
