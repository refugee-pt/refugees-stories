
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('story').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('story').insert([
        {id: 1, image: "https://unsplash.com/photos/Ks4t8IK8Kgw", content: 'Hello, I am Avel and I am 9. I am from a very small village in Thailand. I was taken from my home at night by strange men and brought to a place I did not know. I do not know what happened to my family, I only heard screams the night I was taken. After some time, I was able to escape the place I was in. Terrible things happened to me and the other children there, I always have nightmares. When I escaped a man saw me running and asked where my parents were. I was afraid because I thought he was going to take me back there. But he helped me. I  now live in an orphanage with other children, some of them are other children who escaped. I am hoping to find my family and return home.', author: 'Avel', location: 'Thailand', approved: true, age: 9},
      ]);
    });
};
