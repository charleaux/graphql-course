const Query = {
  users(parent, args, { db }, info) {
    // return users;
    if (!args.query) {
      return db.users;
    }

    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter(post => {
      return (
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
  me() {
    return {
      id: '123098',
      name: 'Mike',
      email: 'mike@exmple.com',
      age: 28
    };
  },
  post() {
    return {
      id: 'abc123',
      title: 'First Post!',
      body: 'This is my first post!',
      published: true
    };
  }
};

export { Query as default };
