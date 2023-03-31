export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'object',
      fields: [
        {name: 'src', type: 'image', title: 'Source'},
        {name: 'alt', type: 'string', title: 'Alt Text'},
      ],
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'repo',
      type: 'url',
      title: 'Repo',
    },
    {
      title: 'Demo Credentials',
      name: 'demo',
      type: 'object',
      fields: [
        {name: 'email', type: 'string', title: 'Email'},
        {name: 'password', type: 'string', title: 'Password'},
      ],
    },
  ],
}
