// deck.test.js

const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const sequelize = require('../db/config');
const Deck = require('../models/deck');
// Clear database and create the table structure
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

// Drop the table structure after all tests are done
afterAll(async () => {
  await sequelize.close();
});

describe('Deck Model', () => {
  it('should create a new Deck', async () => {
    const deck = await Deck.create({ id: 1, name: 'Starter Deck', xp: 100 });
    expect(deck).toHaveProperty('id', 1);
    expect(deck).toHaveProperty('name', 'Starter Deck');
    expect(deck).toHaveProperty('xp', 100);
  });

  it('should not allow a Deck without a name', async () => {
    try {
      await Deck.create({ id: 2, xp: 200 });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
    }
  });

  it('should not allow a Deck without xp', async () => {
    try {
      await Deck.create({ id: 3, name: 'Advanced Deck' });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
    }
  });

  it('should not allow a Deck with a null id', async () => {
    try {
      await Deck.create({ name: 'Null ID Deck', xp: 300 });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
    }
  });
});
