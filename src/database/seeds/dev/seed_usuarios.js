
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    {
      id: 1, 
      nome: 'Administrador do Sistema',
      login: 'admin',
      senha: '12345678',
      email: 'admin@email.com'
    },

    {
      id: 2, 
      nome: 'Francisco Augusto',
      login: 'falcao',
      senha: '87654321',
      email: 'fa@email.com'
    }
  ]);
};
