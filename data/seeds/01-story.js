
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('story').del()
    .then(function () {
      // Inserts seed entries
      return knex('story').insert([
        {id: 1, story_title: "johns long journey", content: 'here is my content', author: 'Griffin', location: 'Utah', approved: true},
      ]);
    });
};
