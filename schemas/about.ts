export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio',
    },
    {
      title: 'Social Media Profiles',
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          title: 'Social Link',
          name: 'link',
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Platform Name'},
            {name: 'url', type: 'url', title: 'Social Profile URL'},
          ],
        },
      ],
    },
  ],
}
